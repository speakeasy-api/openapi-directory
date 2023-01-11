import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationAdaptivePolicySettingsPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationAdaptivePolicySettingsRequestBody:
    enabled_networks: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledNetworks') }})
    

@dataclasses.dataclass
class UpdateOrganizationAdaptivePolicySettingsRequest:
    path_params: UpdateOrganizationAdaptivePolicySettingsPathParams = dataclasses.field()
    request: Optional[UpdateOrganizationAdaptivePolicySettingsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationAdaptivePolicySettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_adaptive_policy_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
