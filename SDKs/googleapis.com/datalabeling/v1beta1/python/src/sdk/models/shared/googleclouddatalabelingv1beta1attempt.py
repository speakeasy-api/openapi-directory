import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlerpcstatus as shared_googlerpcstatus


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1Attempt:
    r"""GoogleCloudDatalabelingV1beta1Attempt
    Records a failed evaluation job run.
    """
    
    attempt_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptTime') }})
    partial_failures: Optional[list[shared_googlerpcstatus.GoogleRPCStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partialFailures') }})
    
