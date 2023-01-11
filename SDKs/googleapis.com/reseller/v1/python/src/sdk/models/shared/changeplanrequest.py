import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import seats as shared_seats


@dataclass_json
@dataclasses.dataclass
class ChangePlanRequest:
    r"""ChangePlanRequest
    JSON template for the ChangePlan rpc request.
    """
    
    deal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealCode') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    plan_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planName') }})
    purchase_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderId') }})
    seats: Optional[shared_seats.Seats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seats') }})
    
