import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sandboxbankaccount as shared_sandboxbankaccount
from ..shared import sandboxcard as shared_sandboxcard
from ..shared import sandboxretrycacheentry as shared_sandboxretrycacheentry


@dataclass_json
@dataclasses.dataclass
class SandboxUser:
    r"""SandboxUser
    User data
    """
    
    accounts: Optional[list[shared_sandboxbankaccount.SandboxBankAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    cards: Optional[list[shared_sandboxcard.SandboxCard]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cards') }})
    retry_cache_entries: Optional[list[shared_sandboxretrycacheentry.SandboxRetryCacheEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryCacheEntries') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
