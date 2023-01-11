import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RouteInfoNextHopTypeEnum(str, Enum):
    NEXT_HOP_TYPE_UNSPECIFIED = "NEXT_HOP_TYPE_UNSPECIFIED"
    NEXT_HOP_IP = "NEXT_HOP_IP"
    NEXT_HOP_INSTANCE = "NEXT_HOP_INSTANCE"
    NEXT_HOP_NETWORK = "NEXT_HOP_NETWORK"
    NEXT_HOP_PEERING = "NEXT_HOP_PEERING"
    NEXT_HOP_INTERCONNECT = "NEXT_HOP_INTERCONNECT"
    NEXT_HOP_VPN_TUNNEL = "NEXT_HOP_VPN_TUNNEL"
    NEXT_HOP_VPN_GATEWAY = "NEXT_HOP_VPN_GATEWAY"
    NEXT_HOP_INTERNET_GATEWAY = "NEXT_HOP_INTERNET_GATEWAY"
    NEXT_HOP_BLACKHOLE = "NEXT_HOP_BLACKHOLE"
    NEXT_HOP_ILB = "NEXT_HOP_ILB"
    NEXT_HOP_ROUTER_APPLIANCE = "NEXT_HOP_ROUTER_APPLIANCE"

class RouteInfoRouteTypeEnum(str, Enum):
    ROUTE_TYPE_UNSPECIFIED = "ROUTE_TYPE_UNSPECIFIED"
    SUBNET = "SUBNET"
    STATIC = "STATIC"
    DYNAMIC = "DYNAMIC"
    PEERING_SUBNET = "PEERING_SUBNET"
    PEERING_STATIC = "PEERING_STATIC"
    PEERING_DYNAMIC = "PEERING_DYNAMIC"
    POLICY_BASED = "POLICY_BASED"


@dataclass_json
@dataclasses.dataclass
class RouteInfo:
    r"""RouteInfo
    For display only. Metadata associated with a Compute Engine route.
    """
    
    dest_ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destIpRange') }})
    dest_port_ranges: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destPortRanges') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    instance_tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTags') }})
    network_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkUri') }})
    next_hop: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextHop') }})
    next_hop_type: Optional[RouteInfoNextHopTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextHopType') }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    protocols: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocols') }})
    route_type: Optional[RouteInfoRouteTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeType') }})
    src_ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcIpRange') }})
    src_port_ranges: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srcPortRanges') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
