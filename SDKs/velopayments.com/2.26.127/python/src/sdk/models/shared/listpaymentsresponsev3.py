import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentresponsev3 as shared_paymentresponsev3


@dataclass_json
@dataclasses.dataclass
class ListPaymentsResponseV3:
    r"""ListPaymentsResponseV3
    List Payments Response Object
    """
    
    content: Optional[list[shared_paymentresponsev3.PaymentResponseV3]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
