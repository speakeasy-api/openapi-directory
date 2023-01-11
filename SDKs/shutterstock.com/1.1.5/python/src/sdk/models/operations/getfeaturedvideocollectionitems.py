import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class GetFeaturedVideoCollectionItemsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFeaturedVideoCollectionItemsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFeaturedVideoCollectionItemsSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFeaturedVideoCollectionItemsRequest:
    path_params: GetFeaturedVideoCollectionItemsPathParams = dataclasses.field()
    query_params: GetFeaturedVideoCollectionItemsQueryParams = dataclasses.field()
    security: GetFeaturedVideoCollectionItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFeaturedVideoCollectionItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_collection_item_data_list: Optional[Any] = dataclasses.field(default=None)
    
