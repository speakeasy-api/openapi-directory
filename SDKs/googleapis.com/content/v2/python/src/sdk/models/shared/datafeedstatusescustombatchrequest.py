import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafeedstatusescustombatchrequestentry as shared_datafeedstatusescustombatchrequestentry


@dataclass_json
@dataclasses.dataclass
class DatafeedstatusesCustomBatchRequest:
    entries: Optional[list[shared_datafeedstatusescustombatchrequestentry.DatafeedstatusesCustomBatchRequestEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
