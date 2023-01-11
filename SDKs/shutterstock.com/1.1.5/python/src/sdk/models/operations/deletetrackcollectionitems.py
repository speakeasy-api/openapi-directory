import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteTrackCollectionItemsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTrackCollectionItemsQueryParams:
    item_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'item_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteTrackCollectionItemsSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteTrackCollectionItemsRequest:
    path_params: DeleteTrackCollectionItemsPathParams = dataclasses.field()
    query_params: DeleteTrackCollectionItemsQueryParams = dataclasses.field()
    security: DeleteTrackCollectionItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTrackCollectionItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
