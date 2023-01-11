import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import poscustombatchrequestentry as shared_poscustombatchrequestentry


@dataclass_json
@dataclasses.dataclass
class PosCustomBatchRequest:
    entries: Optional[list[shared_poscustombatchrequestentry.PosCustomBatchRequestEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
