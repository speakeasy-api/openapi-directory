import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteImageCollectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImageCollectionSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteImageCollectionRequest:
    path_params: DeleteImageCollectionPathParams = dataclasses.field()
    security: DeleteImageCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteImageCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
