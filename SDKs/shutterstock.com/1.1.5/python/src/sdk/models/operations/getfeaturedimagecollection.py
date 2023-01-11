import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import featuredcollection as shared_featuredcollection


@dataclasses.dataclass
class GetFeaturedImageCollectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetFeaturedImageCollectionAssetHintEnum(str, Enum):
    ONEX = "1x"
    TWOX = "2x"

class GetFeaturedImageCollectionEmbedEnum(str, Enum):
    SHARE_URL = "share_url"


@dataclasses.dataclass
class GetFeaturedImageCollectionQueryParams:
    asset_hint: Optional[GetFeaturedImageCollectionAssetHintEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'asset_hint', 'style': 'form', 'explode': True }})
    embed: Optional[GetFeaturedImageCollectionEmbedEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFeaturedImageCollectionSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFeaturedImageCollectionRequest:
    path_params: GetFeaturedImageCollectionPathParams = dataclasses.field()
    query_params: GetFeaturedImageCollectionQueryParams = dataclasses.field()
    security: GetFeaturedImageCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFeaturedImageCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    featured_collection: Optional[shared_featuredcollection.FeaturedCollection] = dataclasses.field(default=None)
    
