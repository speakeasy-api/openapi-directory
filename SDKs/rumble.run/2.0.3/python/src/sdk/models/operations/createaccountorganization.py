import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import orgoptions as shared_orgoptions
from ..shared import organization as shared_organization


@dataclasses.dataclass
class CreateAccountOrganizationSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class CreateAccountOrganizationRequest:
    request: shared_orgoptions.OrgOptions = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAccountOrganizationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateAccountOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    organization: Optional[shared_organization.Organization] = dataclasses.field(default=None)
    
