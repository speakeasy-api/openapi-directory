import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountstatus as shared_accountstatus
from ..shared import errors as shared_errors


@dataclass_json
@dataclasses.dataclass
class AccountstatusesCustomBatchResponseEntry:
    r"""AccountstatusesCustomBatchResponseEntry
    A batch entry encoding a single non-batch accountstatuses response.
    """
    
    account_status: Optional[shared_accountstatus.AccountStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountStatus') }})
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
