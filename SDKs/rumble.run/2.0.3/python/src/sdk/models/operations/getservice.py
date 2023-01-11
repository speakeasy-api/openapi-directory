import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import service as shared_service


@dataclasses.dataclass
class GetServicePathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetServiceSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetServiceRequest:
    path_params: GetServicePathParams = dataclasses.field()
    security: GetServiceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service: Optional[shared_service.Service] = dataclasses.field(default=None)
    
