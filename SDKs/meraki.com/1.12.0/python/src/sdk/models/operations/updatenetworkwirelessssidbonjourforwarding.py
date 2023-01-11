import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessSsidBonjourForwardingPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum(str, Enum):
    ALL_SERVICES = "All Services"
    AIR_PLAY = "AirPlay"
    AFP = "AFP"
    BIT_TORRENT = "BitTorrent"
    FTP = "FTP"
    I_CHAT = "iChat"
    I_TUNES = "iTunes"
    PRINTERS = "Printers"
    SAMBA = "Samba"
    SCANNERS = "Scanners"
    SSH = "SSH"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules:
    services: list[UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    vlan_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidBonjourForwardingRequestBody:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    rules: Optional[list[UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidBonjourForwardingRequest:
    path_params: UpdateNetworkWirelessSsidBonjourForwardingPathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessSsidBonjourForwardingRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidBonjourForwardingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_ssid_bonjour_forwarding_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
