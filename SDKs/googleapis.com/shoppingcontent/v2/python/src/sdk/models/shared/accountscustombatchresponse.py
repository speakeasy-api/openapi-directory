import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountscustombatchresponseentry as shared_accountscustombatchresponseentry


@dataclass_json
@dataclasses.dataclass
class AccountsCustomBatchResponse:
    entries: Optional[list[shared_accountscustombatchresponseentry.AccountsCustomBatchResponseEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
