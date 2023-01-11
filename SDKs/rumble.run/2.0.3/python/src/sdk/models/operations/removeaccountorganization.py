import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class RemoveAccountOrganizationPathParams:
    org_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveAccountOrganizationSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class RemoveAccountOrganizationRequest:
    path_params: RemoveAccountOrganizationPathParams = dataclasses.field()
    security: RemoveAccountOrganizationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveAccountOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
