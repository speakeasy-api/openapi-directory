import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import guaranteedorder as shared_guaranteedorder


@dataclass_json
@dataclasses.dataclass
class ListGuaranteedOrdersResponse:
    guaranteed_orders: Optional[list[shared_guaranteedorder.GuaranteedOrder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteedOrders') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
