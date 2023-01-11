import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessSsidVpnPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum(str, Enum):
    ANY = "Any"
    TCP = "TCP"
    UDP = "UDP"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules:
    dest_cidr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destCidr') }})
    policy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dest_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destPort') }})
    protocol: Optional[UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel:
    r"""UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel
    The VPN split tunnel settings for this SSID.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    rules: Optional[list[UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidVpnRequestBody:
    split_tunnel: Optional[UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splitTunnel') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidVpnRequest:
    path_params: UpdateNetworkWirelessSsidVpnPathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessSsidVpnRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidVpnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_ssid_vpn_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
