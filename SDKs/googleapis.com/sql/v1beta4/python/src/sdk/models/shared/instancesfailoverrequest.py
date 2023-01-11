import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failovercontext as shared_failovercontext


@dataclass_json
@dataclasses.dataclass
class InstancesFailoverRequest:
    r"""InstancesFailoverRequest
    Instance failover request.
    """
    
    failover_context: Optional[shared_failovercontext.FailoverContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failoverContext') }})
    
