import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accounttax as shared_accounttax
from ..shared import errors as shared_errors


@dataclass_json
@dataclasses.dataclass
class AccounttaxCustomBatchResponseEntry:
    r"""AccounttaxCustomBatchResponseEntry
    A batch entry encoding a single non-batch accounttax response.
    """
    
    account_tax: Optional[shared_accounttax.AccountTax] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountTax') }})
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
