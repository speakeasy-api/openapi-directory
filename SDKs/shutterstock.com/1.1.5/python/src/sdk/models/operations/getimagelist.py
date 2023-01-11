import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security

class GetImageListViewEnum(str, Enum):
    MINIMAL = "minimal"
    FULL = "full"


@dataclasses.dataclass
class GetImageListQueryParams:
    id: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    view: Optional[GetImageListViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetImageListSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetImageListRequest:
    query_params: GetImageListQueryParams = dataclasses.field()
    security: GetImageListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetImageListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    image_data_list: Optional[Any] = dataclasses.field(default=None)
    
