import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountscustombatchrequestentry as shared_accountscustombatchrequestentry


@dataclass_json
@dataclasses.dataclass
class AccountsCustomBatchRequest:
    entries: Optional[list[shared_accountscustombatchrequestentry.AccountsCustomBatchRequestEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
