import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security

class GetFeaturedVideoCollectionListEmbedEnum(str, Enum):
    SHARE_URL = "share_url"


@dataclasses.dataclass
class GetFeaturedVideoCollectionListQueryParams:
    embed: Optional[GetFeaturedVideoCollectionListEmbedEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFeaturedVideoCollectionListSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFeaturedVideoCollectionListRequest:
    query_params: GetFeaturedVideoCollectionListQueryParams = dataclasses.field()
    security: GetFeaturedVideoCollectionListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFeaturedVideoCollectionListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    featured_collection_data_list: Optional[Any] = dataclasses.field(default=None)
    
