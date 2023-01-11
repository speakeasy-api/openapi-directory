import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money


@dataclass_json
@dataclasses.dataclass
class RegionalBasePlanConfig:
    r"""RegionalBasePlanConfig
    Configuration for a base plan specific to a region.
    """
    
    new_subscriber_availability: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSubscriberAvailability') }})
    price: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    region_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
