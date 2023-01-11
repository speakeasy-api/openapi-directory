import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class JobScheduling:
    r"""JobScheduling
    Job scheduling options.
    """
    
    max_failures_per_hour: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFailuresPerHour') }})
    max_failures_total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFailuresTotal') }})
    
