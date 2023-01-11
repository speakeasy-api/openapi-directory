import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security

class GetFeaturedImageCollectionListAssetHintEnum(str, Enum):
    ONEX = "1x"
    TWOX = "2x"

class GetFeaturedImageCollectionListEmbedEnum(str, Enum):
    SHARE_URL = "share_url"

class GetFeaturedImageCollectionListTypeEnum(str, Enum):
    PHOTO = "photo"
    EDITORIAL = "editorial"
    VECTOR = "vector"


@dataclasses.dataclass
class GetFeaturedImageCollectionListQueryParams:
    asset_hint: Optional[GetFeaturedImageCollectionListAssetHintEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'asset_hint', 'style': 'form', 'explode': True }})
    embed: Optional[GetFeaturedImageCollectionListEmbedEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    type: Optional[list[GetFeaturedImageCollectionListTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFeaturedImageCollectionListSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFeaturedImageCollectionListRequest:
    query_params: GetFeaturedImageCollectionListQueryParams = dataclasses.field()
    security: GetFeaturedImageCollectionListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFeaturedImageCollectionListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    featured_collection_data_list: Optional[Any] = dataclasses.field(default=None)
    
