import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteVideoCollectionItemsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteVideoCollectionItemsQueryParams:
    item_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'item_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteVideoCollectionItemsSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteVideoCollectionItemsRequest:
    path_params: DeleteVideoCollectionItemsPathParams = dataclasses.field()
    query_params: DeleteVideoCollectionItemsQueryParams = dataclasses.field()
    security: DeleteVideoCollectionItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteVideoCollectionItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
