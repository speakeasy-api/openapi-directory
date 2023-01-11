import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import step as shared_step


@dataclass_json
@dataclasses.dataclass
class ListStepsResponse:
    r"""ListStepsResponse
    Response message for StepService.List.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    steps: Optional[list[shared_step.Step]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
