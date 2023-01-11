import dataclasses
from ..shared import security as shared_security
from ..shared import collectionitemrequest as shared_collectionitemrequest


@dataclasses.dataclass
class AddVideoCollectionItemsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddVideoCollectionItemsSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddVideoCollectionItemsRequest:
    path_params: AddVideoCollectionItemsPathParams = dataclasses.field()
    request: shared_collectionitemrequest.CollectionItemRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddVideoCollectionItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddVideoCollectionItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
