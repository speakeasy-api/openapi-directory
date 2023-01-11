import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateDeviceSwitchPortPathParams:
    port_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portId', 'style': 'simple', 'explode': False }})
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum(str, Enum):
    OPEN = "Open"
    CUSTOM_ACCESS_POLICY = "Custom access policy"
    MAC_ALLOW_LIST = "MAC allow list"
    STICKY_MAC_ALLOW_LIST = "Sticky MAC allow list"

class UpdateDeviceSwitchPortRequestBodyStpGuardEnum(str, Enum):
    DISABLED = "disabled"
    ROOT_GUARD = "root guard"
    BPDU_GUARD = "bpdu guard"
    LOOP_GUARD = "loop guard"

class UpdateDeviceSwitchPortRequestBodyTypeEnum(str, Enum):
    TRUNK = "trunk"
    ACCESS = "access"

class UpdateDeviceSwitchPortRequestBodyUdldEnum(str, Enum):
    ALERT_ONLY = "Alert only"
    ENFORCE = "Enforce"


@dataclass_json
@dataclasses.dataclass
class UpdateDeviceSwitchPortRequestBody:
    access_policy_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyNumber') }})
    access_policy_type: Optional[UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyType') }})
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
    stp_guard: Optional[UpdateDeviceSwitchPortRequestBodyStpGuardEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stpGuard') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[UpdateDeviceSwitchPortRequestBodyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    udld: Optional[UpdateDeviceSwitchPortRequestBodyUdldEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('udld') }})
    vlan: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    voice_vlan: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceVlan') }})
    

@dataclasses.dataclass
class UpdateDeviceSwitchPortRequest:
    path_params: UpdateDeviceSwitchPortPathParams = dataclasses.field()
    request: Optional[UpdateDeviceSwitchPortRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDeviceSwitchPortResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_device_switch_port_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
