import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcroutefaultinjectionpolicyabort as shared_grpcroutefaultinjectionpolicyabort
from ..shared import grpcroutefaultinjectionpolicydelay as shared_grpcroutefaultinjectionpolicydelay


@dataclass_json
@dataclasses.dataclass
class GrpcRouteFaultInjectionPolicy:
    r"""GrpcRouteFaultInjectionPolicy
    The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests.
    """
    
    abort: Optional[shared_grpcroutefaultinjectionpolicyabort.GrpcRouteFaultInjectionPolicyAbort] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abort') }})
    delay: Optional[shared_grpcroutefaultinjectionpolicydelay.GrpcRouteFaultInjectionPolicyDelay] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delay') }})
    
