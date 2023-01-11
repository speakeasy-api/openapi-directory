import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentresponsev4 as shared_paymentresponsev4


@dataclass_json
@dataclasses.dataclass
class ListPaymentsResponseV4:
    r"""ListPaymentsResponseV4
    List Payments Response Object
    """
    
    content: Optional[list[shared_paymentresponsev4.PaymentResponseV4]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
