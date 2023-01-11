import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceaccount as shared_serviceaccount


@dataclass_json
@dataclasses.dataclass
class UndeleteServiceAccountResponse:
    restored_account: Optional[shared_serviceaccount.ServiceAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoredAccount') }})
    
