import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import organization as shared_organization


@dataclasses.dataclass
class RotateAccountOrganizationExportTokenPathParams:
    org_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RotateAccountOrganizationExportTokenSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class RotateAccountOrganizationExportTokenRequest:
    path_params: RotateAccountOrganizationExportTokenPathParams = dataclasses.field()
    security: RotateAccountOrganizationExportTokenSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RotateAccountOrganizationExportTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    organization: Optional[shared_organization.Organization] = dataclasses.field(default=None)
    
