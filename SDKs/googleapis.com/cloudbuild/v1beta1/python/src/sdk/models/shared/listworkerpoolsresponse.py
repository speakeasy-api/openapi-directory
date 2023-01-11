import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workerpool as shared_workerpool


@dataclass_json
@dataclasses.dataclass
class ListWorkerPoolsResponse:
    r"""ListWorkerPoolsResponse
    Response containing existing `WorkerPools`.
    """
    
    worker_pools: Optional[list[shared_workerpool.WorkerPool]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerPools') }})
    
