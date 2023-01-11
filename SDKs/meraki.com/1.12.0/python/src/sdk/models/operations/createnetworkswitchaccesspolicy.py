import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkSwitchAccessPolicyPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum(str, Enum):
    EIGHT_HUNDRED_AND_TWO_1X = "802.1x"
    MAC_AUTHENTICATION_BYPASS = "MAC authentication bypass"
    HYBRID_AUTHENTICATION = "Hybrid authentication"

class CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum(str, Enum):
    SINGLE_HOST = "Single-Host"
    MULTI_DOMAIN = "Multi-Domain"
    MULTI_HOST = "Multi-Host"
    MULTI_AUTH = "Multi-Auth"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth:
    r"""CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
    Critical auth settings for when authentication is rejected by the RADIUS server
    """
    
    data_vlan_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataVlanId') }})
    suspend_port_bounce: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspendPortBounce') }})
    voice_vlan_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceVlanId') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchAccessPolicyRequestBodyRadius:
    r"""CreateNetworkSwitchAccessPolicyRequestBodyRadius
    Object for RADIUS Settings
    """
    
    critical_auth: Optional[CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criticalAuth') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers:
    host: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers:
    host: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkSwitchAccessPolicyRequestBody:
    host_mode: CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostMode') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    radius_accounting_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusAccountingEnabled') }})
    radius_coa_support_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusCoaSupportEnabled') }})
    radius_servers: list[CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusServers') }})
    radius_testing_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusTestingEnabled') }})
    url_redirect_walled_garden_enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlRedirectWalledGardenEnabled') }})
    access_policy_type: Optional[CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicyType') }})
    guest_vlan_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestVlanId') }})
    increase_access_speed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('increaseAccessSpeed') }})
    radius: Optional[CreateNetworkSwitchAccessPolicyRequestBodyRadius] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    radius_accounting_servers: Optional[list[CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusAccountingServers') }})
    radius_group_attribute: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusGroupAttribute') }})
    url_redirect_walled_garden_ranges: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlRedirectWalledGardenRanges') }})
    voice_vlan_clients: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceVlanClients') }})
    

@dataclasses.dataclass
class CreateNetworkSwitchAccessPolicyRequest:
    path_params: CreateNetworkSwitchAccessPolicyPathParams = dataclasses.field()
    request: CreateNetworkSwitchAccessPolicyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkSwitchAccessPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_switch_access_policy_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
