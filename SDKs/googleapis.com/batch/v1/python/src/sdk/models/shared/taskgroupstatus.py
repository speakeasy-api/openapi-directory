import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancestatus as shared_instancestatus


@dataclass_json
@dataclasses.dataclass
class TaskGroupStatus:
    counts: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    instances: Optional[list[shared_instancestatus.InstanceStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    
