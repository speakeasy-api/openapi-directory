import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteVideoCollectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteVideoCollectionSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteVideoCollectionRequest:
    path_params: DeleteVideoCollectionPathParams = dataclasses.field()
    security: DeleteVideoCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteVideoCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
