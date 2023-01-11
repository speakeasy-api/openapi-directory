import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import guaranteed as shared_guaranteed
from ..shared import queueingpolicy as shared_queueingpolicy
from ..shared import queuedresourcestate as shared_queuedresourcestate
from ..shared import tpu as shared_tpu
from ..shared import tpu as shared_tpu


@dataclass_json
@dataclasses.dataclass
class QueuedResource:
    r"""QueuedResource
    A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
    """
    
    best_effort: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestEffort') }})
    guaranteed: Optional[shared_guaranteed.Guaranteed] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteed') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    queueing_policy: Optional[shared_queueingpolicy.QueueingPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueingPolicy') }})
    state: Optional[shared_queuedresourcestate.QueuedResourceState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tpu: Optional[shared_tpu.Tpu] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tpu') }})
    

@dataclass_json
@dataclasses.dataclass
class QueuedResourceInput:
    r"""QueuedResourceInput
    A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
    """
    
    best_effort: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestEffort') }})
    guaranteed: Optional[shared_guaranteed.Guaranteed] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteed') }})
    queueing_policy: Optional[shared_queueingpolicy.QueueingPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueingPolicy') }})
    state: Optional[shared_queuedresourcestate.QueuedResourceState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tpu: Optional[shared_tpu.TpuInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tpu') }})
    
