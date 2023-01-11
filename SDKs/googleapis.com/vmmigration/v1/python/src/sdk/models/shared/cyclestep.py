import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicatingstep as shared_replicatingstep


@dataclass_json
@dataclasses.dataclass
class CycleStep:
    r"""CycleStep
    CycleStep holds information about a step progress.
    """
    
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    initializing_replication: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initializingReplication') }})
    post_processing: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postProcessing') }})
    replicating: Optional[shared_replicatingstep.ReplicatingStep] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicating') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
