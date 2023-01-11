import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payment as shared_payment


@dataclass_json
@dataclasses.dataclass
class ListPaymentsResponse:
    r"""ListPaymentsResponse
    Response definition for the payments list rpc.
    """
    
    payments: Optional[list[shared_payment.Payment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    
