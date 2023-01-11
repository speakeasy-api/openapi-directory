import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchAccessPolicyPathParams:
    access_policy_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accessPolicyNumber', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum(str, Enum):
    EIGHT_HUNDRED_AND_TWO_1X = "802.1x"
    MAC_AUTHENTICATION_BYPASS = "MAC authentication bypass"
    HYBRID_AUTHENTICATION = "Hybrid authentication"

class UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum(str, Enum):
    SINGLE_HOST = "Single-Host"
    MULTI_DOMAIN = "Multi-Domain"
    MULTI_HOST = "Multi-Host"
    MULTI_AUTH = "Multi-Auth"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth:
    r"""UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
    Critical auth settings for when authentication is rejected by the RADIUS server
    """
    
    data_vlan_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataVlanId') }})
    suspend_port_bounce: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendPortBounce') }})
    voice_vlan_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceVlanId') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchAccessPolicyRequestBodyRadius:
    r"""UpdateNetworkSwitchAccessPolicyRequestBodyRadius
    Object for RADIUS Settings
    """
    
    critical_auth: Optional[UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criticalAuth') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers:
    host: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers:
    host: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchAccessPolicyRequestBody:
    access_policy_type: Optional[UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyType') }})
    guest_vlan_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestVlanId') }})
    host_mode: Optional[UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostMode') }})
    increase_access_speed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('increaseAccessSpeed') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    radius: Optional[UpdateNetworkSwitchAccessPolicyRequestBodyRadius] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    radius_accounting_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusAccountingEnabled') }})
    radius_accounting_servers: Optional[list[UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusAccountingServers') }})
    radius_coa_support_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusCoaSupportEnabled') }})
    radius_group_attribute: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusGroupAttribute') }})
    radius_servers: Optional[list[UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusServers') }})
    radius_testing_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusTestingEnabled') }})
    url_redirect_walled_garden_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlRedirectWalledGardenEnabled') }})
    url_redirect_walled_garden_ranges: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlRedirectWalledGardenRanges') }})
    voice_vlan_clients: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceVlanClients') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchAccessPolicyRequest:
    path_params: UpdateNetworkSwitchAccessPolicyPathParams = dataclasses.field()
    request: Optional[UpdateNetworkSwitchAccessPolicyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchAccessPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_access_policy_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
