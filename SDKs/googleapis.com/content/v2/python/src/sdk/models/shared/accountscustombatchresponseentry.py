import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account as shared_account
from ..shared import errors as shared_errors


@dataclass_json
@dataclasses.dataclass
class AccountsCustomBatchResponseEntry:
    r"""AccountsCustomBatchResponseEntry
    A batch entry encoding a single non-batch accounts response.
    """
    
    account: Optional[shared_account.Account] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    link_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkStatus') }})
    
