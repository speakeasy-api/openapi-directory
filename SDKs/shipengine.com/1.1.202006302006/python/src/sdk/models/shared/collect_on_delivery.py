import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payment_amount as shared_payment_amount
from ..shared import collect_on_delivery_payment_type_enum as shared_collect_on_delivery_payment_type_enum


@dataclass_json
@dataclasses.dataclass
class CollectOnDelivery:
    r"""CollectOnDelivery
    Defer payment until package is delivered, instead of when it is ordered.
    """
    
    payment_amount: Optional[shared_payment_amount.PaymentAmount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_amount') }})
    payment_type: Optional[shared_collect_on_delivery_payment_type_enum.CollectOnDeliveryPaymentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_type') }})
    
