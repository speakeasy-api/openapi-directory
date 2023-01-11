import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcroutedestination as shared_grpcroutedestination
from ..shared import grpcroutefaultinjectionpolicy as shared_grpcroutefaultinjectionpolicy
from ..shared import grpcrouteretrypolicy as shared_grpcrouteretrypolicy


@dataclass_json
@dataclasses.dataclass
class GrpcRouteRouteAction:
    r"""GrpcRouteRouteAction
    Specifies how to route matched traffic.
    """
    
    destinations: Optional[list[shared_grpcroutedestination.GrpcRouteDestination]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    fault_injection_policy: Optional[shared_grpcroutefaultinjectionpolicy.GrpcRouteFaultInjectionPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faultInjectionPolicy') }})
    retry_policy: Optional[shared_grpcrouteretrypolicy.GrpcRouteRetryPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryPolicy') }})
    timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
