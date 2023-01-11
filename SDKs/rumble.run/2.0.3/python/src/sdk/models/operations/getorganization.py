import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import organization as shared_organization


@dataclasses.dataclass
class GetOrganizationSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetOrganizationRequest:
    security: GetOrganizationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    organization: Optional[shared_organization.Organization] = dataclasses.field(default=None)
    
