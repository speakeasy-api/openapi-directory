import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class RemoveServicePathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveServiceSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class RemoveServiceRequest:
    path_params: RemoveServicePathParams = dataclasses.field()
    security: RemoveServiceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
