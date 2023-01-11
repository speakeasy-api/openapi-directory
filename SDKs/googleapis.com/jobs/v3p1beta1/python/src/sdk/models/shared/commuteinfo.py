import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import location as shared_location


@dataclass_json
@dataclasses.dataclass
class CommuteInfo:
    r"""CommuteInfo
    Output only. Commute details related to this job.
    """
    
    job_location: Optional[shared_location.Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobLocation') }})
    travel_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('travelDuration') }})
    
