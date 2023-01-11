import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VpnTunnelInfoRoutingTypeEnum(str, Enum):
    ROUTING_TYPE_UNSPECIFIED = "ROUTING_TYPE_UNSPECIFIED"
    ROUTE_BASED = "ROUTE_BASED"
    POLICY_BASED = "POLICY_BASED"
    DYNAMIC = "DYNAMIC"


@dataclass_json
@dataclasses.dataclass
class VpnTunnelInfo:
    r"""VpnTunnelInfo
    For display only. Metadata associated with a Compute Engine VPN tunnel.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    network_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkUri') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    remote_gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteGateway') }})
    remote_gateway_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteGatewayIp') }})
    routing_type: Optional[VpnTunnelInfoRoutingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingType') }})
    source_gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceGateway') }})
    source_gateway_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceGatewayIp') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
