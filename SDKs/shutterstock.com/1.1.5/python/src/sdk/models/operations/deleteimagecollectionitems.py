import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteImageCollectionItemsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImageCollectionItemsQueryParams:
    item_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'item_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteImageCollectionItemsSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteImageCollectionItemsRequest:
    path_params: DeleteImageCollectionItemsPathParams = dataclasses.field()
    query_params: DeleteImageCollectionItemsQueryParams = dataclasses.field()
    security: DeleteImageCollectionItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteImageCollectionItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
