import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import businessdayconfig as shared_businessdayconfig
from ..shared import warehousecutofftime as shared_warehousecutofftime
from ..shared import address as shared_address


@dataclass_json
@dataclasses.dataclass
class Warehouse:
    r"""Warehouse
    A fulfillment warehouse, which stores and handles inventory.
    """
    
    business_day_config: Optional[shared_businessdayconfig.BusinessDayConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessDayConfig') }})
    cutoff_time: Optional[shared_warehousecutofftime.WarehouseCutoffTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cutoffTime') }})
    handling_days: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handlingDays') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    shipping_address: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingAddress') }})
    
