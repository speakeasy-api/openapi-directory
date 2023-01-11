import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountactivity as shared_accountactivity

class AccountDetailsAppLicensingVerdictEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    LICENSED = "LICENSED"
    UNLICENSED = "UNLICENSED"
    UNEVALUATED = "UNEVALUATED"


@dataclass_json
@dataclasses.dataclass
class AccountDetails:
    r"""AccountDetails
    Contains the account information such as the licensing status for the user in the scope.
    """
    
    account_activity: Optional[shared_accountactivity.AccountActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountActivity') }})
    app_licensing_verdict: Optional[AccountDetailsAppLicensingVerdictEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appLicensingVerdict') }})
    
