import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTrackCollectionItemsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetTrackCollectionItemsSortEnum(str, Enum):
    NEWEST = "newest"
    OLDEST = "oldest"


@dataclasses.dataclass
class GetTrackCollectionItemsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    share_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'share_code', 'style': 'form', 'explode': True }})
    sort: Optional[GetTrackCollectionItemsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTrackCollectionItemsSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetTrackCollectionItemsRequest:
    path_params: GetTrackCollectionItemsPathParams = dataclasses.field()
    query_params: GetTrackCollectionItemsQueryParams = dataclasses.field()
    security: GetTrackCollectionItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTrackCollectionItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_item_data_list: Optional[Any] = dataclasses.field(default=None)
    
