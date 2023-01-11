import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlerpcstatus as shared_googlerpcstatus


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2TaskAttemptResult:
    r"""GoogleCloudRunV2TaskAttemptResult
    Result of a task attempt.
    """
    
    exit_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCode') }})
    status: Optional[shared_googlerpcstatus.GoogleRPCStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
