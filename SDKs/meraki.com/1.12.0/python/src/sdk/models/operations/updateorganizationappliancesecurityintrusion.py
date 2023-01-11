import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationApplianceSecurityIntrusionPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules:
    rule_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationApplianceSecurityIntrusionRequestBody:
    allowed_rules: list[UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedRules') }})
    

@dataclasses.dataclass
class UpdateOrganizationApplianceSecurityIntrusionRequest:
    path_params: UpdateOrganizationApplianceSecurityIntrusionPathParams = dataclasses.field()
    request: UpdateOrganizationApplianceSecurityIntrusionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationApplianceSecurityIntrusionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_appliance_security_intrusion_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
