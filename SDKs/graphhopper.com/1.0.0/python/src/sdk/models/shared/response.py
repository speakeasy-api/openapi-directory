import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import solution as shared_solution

class ResponseStatusEnum(str, Enum):
    WAITING_IN_QUEUE = "waiting_in_queue"
    PROCESSING = "processing"
    FINISHED = "finished"


@dataclass_json
@dataclasses.dataclass
class Response:
    copyrights: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyrights') }})
    processing_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processing_time') }})
    solution: Optional[shared_solution.Solution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solution') }})
    status: Optional[ResponseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    waiting_time_in_queue: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_time_in_queue') }})
    
