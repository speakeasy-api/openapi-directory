import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import featuredcollection as shared_featuredcollection


@dataclasses.dataclass
class GetFeaturedVideoCollectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetFeaturedVideoCollectionEmbedEnum(str, Enum):
    SHARE_URL = "share_url"


@dataclasses.dataclass
class GetFeaturedVideoCollectionQueryParams:
    embed: Optional[GetFeaturedVideoCollectionEmbedEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFeaturedVideoCollectionSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFeaturedVideoCollectionRequest:
    path_params: GetFeaturedVideoCollectionPathParams = dataclasses.field()
    query_params: GetFeaturedVideoCollectionQueryParams = dataclasses.field()
    security: GetFeaturedVideoCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFeaturedVideoCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    featured_collection: Optional[shared_featuredcollection.FeaturedCollection] = dataclasses.field(default=None)
    
