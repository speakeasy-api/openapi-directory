import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security


@dataclasses.dataclass
class GetImageCollectionItemsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetImageCollectionItemsSortEnum(str, Enum):
    NEWEST = "newest"
    OLDEST = "oldest"


@dataclasses.dataclass
class GetImageCollectionItemsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    share_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'share_code', 'style': 'form', 'explode': True }})
    sort: Optional[GetImageCollectionItemsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetImageCollectionItemsSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetImageCollectionItemsRequest:
    path_params: GetImageCollectionItemsPathParams = dataclasses.field()
    query_params: GetImageCollectionItemsQueryParams = dataclasses.field()
    security: GetImageCollectionItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetImageCollectionItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collection_item_data_list: Optional[Any] = dataclasses.field(default=None)
    
