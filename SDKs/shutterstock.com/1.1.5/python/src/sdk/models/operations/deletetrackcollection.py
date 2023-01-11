import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteTrackCollectionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTrackCollectionSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteTrackCollectionRequest:
    path_params: DeleteTrackCollectionPathParams = dataclasses.field()
    security: DeleteTrackCollectionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTrackCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
