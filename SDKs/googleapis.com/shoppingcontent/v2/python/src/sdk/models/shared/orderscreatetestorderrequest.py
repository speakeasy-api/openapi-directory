import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testorder as shared_testorder


@dataclass_json
@dataclasses.dataclass
class OrdersCreateTestOrderRequest:
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    template_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    test_order: Optional[shared_testorder.TestOrder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testOrder') }})
    
