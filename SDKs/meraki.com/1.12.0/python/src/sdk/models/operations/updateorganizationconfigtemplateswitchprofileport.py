import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationConfigTemplateSwitchProfilePortPathParams:
    config_template_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configTemplateId', 'style': 'simple', 'explode': False }})
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    port_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portId', 'style': 'simple', 'explode': False }})
    profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum(str, Enum):
    OPEN = "Open"
    CUSTOM_ACCESS_POLICY = "Custom access policy"
    MAC_ALLOW_LIST = "MAC allow list"
    STICKY_MAC_ALLOW_LIST = "Sticky MAC allow list"

class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum(str, Enum):
    DISABLED = "disabled"
    ROOT_GUARD = "root guard"
    BPDU_GUARD = "bpdu guard"
    LOOP_GUARD = "loop guard"

class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum(str, Enum):
    TRUNK = "trunk"
    ACCESS = "access"

class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum(str, Enum):
    ALERT_ONLY = "Alert only"
    ENFORCE = "Enforce"


@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody:
    access_policy_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyNumber') }})
    access_policy_type: Optional[UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyType') }})
    allowed_vlans: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedVlans') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    flexible_stacking_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flexibleStackingEnabled') }})
    isolation_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isolationEnabled') }})
    link_negotiation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkNegotiation') }})
    mac_allow_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macAllowList') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    poe_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poeEnabled') }})
    port_schedule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portScheduleId') }})
    rstp_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rstpEnabled') }})
    sticky_mac_allow_list: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stickyMacAllowList') }})
    sticky_mac_allow_list_limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stickyMacAllowListLimit') }})
    storm_control_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stormControlEnabled') }})
    stp_guard: Optional[UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stpGuard') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    udld: Optional[UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('udld') }})
    vlan: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    voice_vlan: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceVlan') }})
    

@dataclasses.dataclass
class UpdateOrganizationConfigTemplateSwitchProfilePortRequest:
    path_params: UpdateOrganizationConfigTemplateSwitchProfilePortPathParams = dataclasses.field()
    request: Optional[UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationConfigTemplateSwitchProfilePortResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_config_template_switch_profile_port_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
