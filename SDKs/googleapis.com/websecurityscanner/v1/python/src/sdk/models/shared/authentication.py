import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customaccount as shared_customaccount
from ..shared import googleaccount as shared_googleaccount
from ..shared import iapcredential as shared_iapcredential


@dataclass_json
@dataclasses.dataclass
class Authentication:
    r"""Authentication
    Scan authentication configuration.
    """
    
    custom_account: Optional[shared_customaccount.CustomAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customAccount') }})
    google_account: Optional[shared_googleaccount.GoogleAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleAccount') }})
    iap_credential: Optional[shared_iapcredential.IapCredential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iapCredential') }})
    
