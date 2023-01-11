import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import collection as shared_collection


@dataclasses.dataclass
class GetVideoCollectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetVideoCollectionEmbedEnum(str, Enum):
    SHARE_CODE = "share_code"
    SHARE_URL = "share_url"


@dataclasses.dataclass
class GetVideoCollectionQueryParams:
    embed: Optional[list[GetVideoCollectionEmbedEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    share_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'share_code', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetVideoCollectionSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetVideoCollectionRequest:
    path_params: GetVideoCollectionPathParams = dataclasses.field()
    query_params: GetVideoCollectionQueryParams = dataclasses.field()
    security: GetVideoCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVideoCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection: Optional[shared_collection.Collection] = dataclasses.field(default=None)
    
