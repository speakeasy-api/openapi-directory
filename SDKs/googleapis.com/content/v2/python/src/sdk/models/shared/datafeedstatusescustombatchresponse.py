import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafeedstatusescustombatchresponseentry as shared_datafeedstatusescustombatchresponseentry


@dataclass_json
@dataclasses.dataclass
class DatafeedstatusesCustomBatchResponse:
    entries: Optional[list[shared_datafeedstatusescustombatchresponseentry.DatafeedstatusesCustomBatchResponseEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
