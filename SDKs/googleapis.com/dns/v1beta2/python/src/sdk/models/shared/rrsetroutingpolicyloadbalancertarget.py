import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum(str, Enum):
    UNDEFINED = "undefined"
    TCP = "tcp"
    UDP = "udp"

class RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum(str, Enum):
    NONE = "none"
    REGIONAL_L4ILB = "regionalL4ilb"


@dataclass_json
@dataclasses.dataclass
class RrSetRoutingPolicyLoadBalancerTarget:
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    ip_protocol: Optional[RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipProtocol') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    load_balancer_type: Optional[RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerType') }})
    network_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkUrl') }})
    port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
