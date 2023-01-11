import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentv3 as shared_paymentv3


@dataclass_json
@dataclasses.dataclass
class PagedPaymentsResponseV3:
    r"""PagedPaymentsResponseV3
    List Payees Response Object
    """
    
    content: Optional[list[shared_paymentv3.PaymentV3]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
