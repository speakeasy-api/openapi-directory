import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationBrandingPoliciesPrioritiesPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationBrandingPoliciesPrioritiesRequestBody:
    branding_policy_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandingPolicyIds') }})
    

@dataclasses.dataclass
class UpdateOrganizationBrandingPoliciesPrioritiesRequest:
    path_params: UpdateOrganizationBrandingPoliciesPrioritiesPathParams = dataclasses.field()
    request: UpdateOrganizationBrandingPoliciesPrioritiesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationBrandingPoliciesPrioritiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_branding_policies_priorities_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
