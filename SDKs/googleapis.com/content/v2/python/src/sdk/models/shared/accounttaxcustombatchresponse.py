import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accounttaxcustombatchresponseentry as shared_accounttaxcustombatchresponseentry


@dataclass_json
@dataclasses.dataclass
class AccounttaxCustomBatchResponse:
    entries: Optional[list[shared_accounttaxcustombatchresponseentry.AccounttaxCustomBatchResponseEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
