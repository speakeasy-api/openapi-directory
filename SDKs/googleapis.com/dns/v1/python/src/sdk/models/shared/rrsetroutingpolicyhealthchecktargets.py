import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rrsetroutingpolicyloadbalancertarget as shared_rrsetroutingpolicyloadbalancertarget


@dataclass_json
@dataclasses.dataclass
class RrSetRoutingPolicyHealthCheckTargets:
    r"""RrSetRoutingPolicyHealthCheckTargets
    HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response.
    """
    
    internal_load_balancers: Optional[list[shared_rrsetroutingpolicyloadbalancertarget.RrSetRoutingPolicyLoadBalancerTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalLoadBalancers') }})
    
