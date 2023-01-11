import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v3_run as shared_v3_run
from ..shared import v3_status as shared_v3_status


@dataclass_json
@dataclasses.dataclass
class V3RunsResponse:
    runs: Optional[list[shared_v3_run.V3Run]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runs') }})
    status: Optional[shared_v3_status.V3Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
