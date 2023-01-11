import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cluster as shared_cluster

class ClusterResponseStatusEnum(str, Enum):
    WAITING_IN_QUEUE = "waiting_in_queue"
    PROCESSING = "processing"
    FINISHED = "finished"


@dataclass_json
@dataclasses.dataclass
class ClusterResponse:
    clusters: Optional[list[shared_cluster.Cluster]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    copyrights: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyrights') }})
    processing_time: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processing_time') }})
    status: Optional[ClusterResponseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    waiting_time_in_queue: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_time_in_queue') }})
    
