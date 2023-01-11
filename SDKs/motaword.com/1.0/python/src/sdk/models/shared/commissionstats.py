import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monetary as shared_monetary


@dataclass_json
@dataclasses.dataclass
class CommissionStats:
    balance: Optional[shared_monetary.Monetary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    paid: Optional[shared_monetary.Monetary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paid') }})
    quote_total: Optional[shared_monetary.Monetary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote_total') }})
    total: Optional[shared_monetary.Monetary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
