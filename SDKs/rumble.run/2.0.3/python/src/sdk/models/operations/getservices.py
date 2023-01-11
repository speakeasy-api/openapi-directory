import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import service as shared_service


@dataclasses.dataclass
class GetServicesQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetServicesSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetServicesRequest:
    query_params: GetServicesQueryParams = dataclasses.field()
    security: GetServicesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    services: Optional[list[shared_service.Service]] = dataclasses.field(default=None)
    
