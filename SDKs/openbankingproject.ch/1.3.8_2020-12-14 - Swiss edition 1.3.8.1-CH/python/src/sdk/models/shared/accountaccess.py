import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountreference16_ch as shared_accountreference16_ch
from ..shared import additionalinformationaccess as shared_additionalinformationaccess

class AccountAccessAllPsd2Enum(str, Enum):
    ALL_ACCOUNTS = "allAccounts"
    ALL_ACCOUNTS_WITH_OWNER_NAME = "allAccountsWithOwnerName"

class AccountAccessAvailableAccountsEnum(str, Enum):
    ALL_ACCOUNTS = "allAccounts"
    ALL_ACCOUNTS_WITH_OWNER_NAME = "allAccountsWithOwnerName"

class AccountAccessAvailableAccountsWithBalanceEnum(str, Enum):
    ALL_ACCOUNTS = "allAccounts"
    ALL_ACCOUNTS_WITH_OWNER_NAME = "allAccountsWithOwnerName"


@dataclass_json
@dataclasses.dataclass
class AccountAccess:
    r"""AccountAccess
    Requested access services for a consent.
    
    """
    
    accounts: Optional[list[shared_accountreference16_ch.AccountReference16Ch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    additional_information: Optional[shared_additionalinformationaccess.AdditionalInformationAccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInformation') }})
    all_psd2: Optional[AccountAccessAllPsd2Enum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allPsd2') }})
    available_accounts: Optional[AccountAccessAvailableAccountsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableAccounts') }})
    available_accounts_with_balance: Optional[AccountAccessAvailableAccountsWithBalanceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableAccountsWithBalance') }})
    balances: Optional[list[shared_accountreference16_ch.AccountReference16Ch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balances') }})
    restricted_to: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedTo') }})
    transactions: Optional[list[shared_accountreference16_ch.AccountReference16Ch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    
