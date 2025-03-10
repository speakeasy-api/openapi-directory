import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security

class GetTrackCollectionListEmbedEnum(str, Enum):
    SHARE_CODE = "share_code"
    SHARE_URL = "share_url"


@dataclasses.dataclass
class GetTrackCollectionListQueryParams:
    embed: Optional[list[GetTrackCollectionListEmbedEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTrackCollectionListSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetTrackCollectionListRequest:
    query_params: GetTrackCollectionListQueryParams = dataclasses.field()
    security: GetTrackCollectionListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTrackCollectionListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_data_list: Optional[Any] = dataclasses.field(default=None)
    
