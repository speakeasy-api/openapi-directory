import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import paymentdeltav1 as shared_paymentdeltav1


@dataclass_json
@dataclasses.dataclass
class PaymentDeltaResponseV1:
    r"""PaymentDeltaResponseV1
    List Payment Changes Response Object
    """
    
    content: Optional[list[shared_paymentdeltav1.PaymentDeltaV1]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    links: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
