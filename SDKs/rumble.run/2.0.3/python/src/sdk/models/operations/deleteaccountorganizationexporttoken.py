import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteAccountOrganizationExportTokenPathParams:
    org_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAccountOrganizationExportTokenSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class DeleteAccountOrganizationExportTokenRequest:
    path_params: DeleteAccountOrganizationExportTokenPathParams = dataclasses.field()
    security: DeleteAccountOrganizationExportTokenSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAccountOrganizationExportTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
