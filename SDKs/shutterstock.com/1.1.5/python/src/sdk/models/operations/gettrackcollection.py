import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import collection as shared_collection


@dataclasses.dataclass
class GetTrackCollectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetTrackCollectionEmbedEnum(str, Enum):
    SHARE_CODE = "share_code"
    SHARE_URL = "share_url"


@dataclasses.dataclass
class GetTrackCollectionQueryParams:
    embed: Optional[list[GetTrackCollectionEmbedEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    share_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'share_code', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTrackCollectionSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetTrackCollectionRequest:
    path_params: GetTrackCollectionPathParams = dataclasses.field()
    query_params: GetTrackCollectionQueryParams = dataclasses.field()
    security: GetTrackCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTrackCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection: Optional[shared_collection.Collection] = dataclasses.field(default=None)
    
