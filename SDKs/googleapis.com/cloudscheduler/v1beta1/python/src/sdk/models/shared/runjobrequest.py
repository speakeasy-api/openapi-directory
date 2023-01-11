import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RunJobRequest:
    r"""RunJobRequest
    Request message for forcing a job to run now using RunJob.
    """
    
    legacy_app_engine_cron: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyAppEngineCron') }})
    
