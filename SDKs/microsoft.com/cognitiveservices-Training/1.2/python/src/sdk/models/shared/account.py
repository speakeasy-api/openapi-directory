import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apikeys as shared_apikeys
from ..shared import accountquota as shared_accountquota


@dataclass_json
@dataclasses.dataclass
class Account:
    r"""Account
    Represents a user account
    """
    
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }})
    keys: Optional[shared_apikeys.APIKeys] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keys') }})
    quotas: Optional[shared_accountquota.AccountQuota] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quotas') }})
    user_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    
