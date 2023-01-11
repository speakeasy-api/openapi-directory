import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import orgoptions as shared_orgoptions
from ..shared import organization as shared_organization


@dataclasses.dataclass
class UpdateOrganizationSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UpdateOrganizationRequest:
    request: shared_orgoptions.OrgOptions = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateOrganizationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    organization: Optional[shared_organization.Organization] = dataclasses.field(default=None)
    
