import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverycontrolfrequencycap as shared_deliverycontrolfrequencycap


@dataclass_json
@dataclasses.dataclass
class DeliveryControl:
    creative_blocking_level: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeBlockingLevel') }})
    delivery_rate_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryRateType') }})
    frequency_caps: Optional[list[shared_deliverycontrolfrequencycap.DeliveryControlFrequencyCap]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyCaps') }})
    
