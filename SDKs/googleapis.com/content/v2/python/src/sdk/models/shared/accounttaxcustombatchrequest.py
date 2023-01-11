import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accounttaxcustombatchrequestentry as shared_accounttaxcustombatchrequestentry


@dataclass_json
@dataclasses.dataclass
class AccounttaxCustomBatchRequest:
    entries: Optional[list[shared_accounttaxcustombatchrequestentry.AccounttaxCustomBatchRequestEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    
