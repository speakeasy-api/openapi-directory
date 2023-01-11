import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security

class GetVideoListViewEnum(str, Enum):
    MINIMAL = "minimal"
    FULL = "full"


@dataclasses.dataclass
class GetVideoListQueryParams:
    id: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    view: Optional[GetVideoListViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVideoListSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetVideoListRequest:
    query_params: GetVideoListQueryParams = dataclasses.field()
    security: GetVideoListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_data_list: Optional[Any] = dataclasses.field(default=None)
    
