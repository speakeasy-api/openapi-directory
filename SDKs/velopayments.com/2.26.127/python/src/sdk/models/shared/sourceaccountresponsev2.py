import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autotopupconfig as shared_autotopupconfig
from ..shared import notifications as shared_notifications

class SourceAccountResponseV2CurrencyEnum(str, Enum):
    USD = "USD"


@dataclass_json
@dataclasses.dataclass
class SourceAccountResponseV2:
    account_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    balance_visible: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceVisible') }})
    funding_ref: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingRef') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    physical_account_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalAccountName') }})
    pooled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pooled') }})
    rails_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('railsId') }})
    auto_top_up_config: Optional[shared_autotopupconfig.AutoTopUpConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoTopUpConfig') }})
    balance: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    currency: Optional[SourceAccountResponseV2CurrencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    funding_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingAccountId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notifications: Optional[shared_notifications.Notifications] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    physical_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalAccountId') }})
    
