import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gmbaccountsgmbaccount as shared_gmbaccountsgmbaccount


@dataclass_json
@dataclasses.dataclass
class LiasettingsGetAccessibleGmbAccountsResponse:
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    gmb_accounts: Optional[list[shared_gmbaccountsgmbaccount.GmbAccountsGmbAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gmbAccounts') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
