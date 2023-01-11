import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountstatusescustombatchresponseentry as shared_accountstatusescustombatchresponseentry


@dataclass_json
@dataclasses.dataclass
class AccountstatusesCustomBatchResponse:
    entries: Optional[list[shared_accountstatusescustombatchresponseentry.AccountstatusesCustomBatchResponseEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
