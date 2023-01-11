import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accounttax as shared_accounttax


@dataclass_json
@dataclasses.dataclass
class AccounttaxCustomBatchRequestEntry:
    r"""AccounttaxCustomBatchRequestEntry
    A batch entry encoding a single non-batch accounttax request.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    account_tax: Optional[shared_accounttax.AccountTax] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountTax') }})
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    merchant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    
