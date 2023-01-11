import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountidentifier as shared_accountidentifier


@dataclass_json
@dataclasses.dataclass
class AccountsAuthInfoResponse:
    account_identifiers: Optional[list[shared_accountidentifier.AccountIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountIdentifiers') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
