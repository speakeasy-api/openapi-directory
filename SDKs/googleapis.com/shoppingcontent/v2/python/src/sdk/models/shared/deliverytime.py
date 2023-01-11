import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cutofftime as shared_cutofftime
from ..shared import businessdayconfig as shared_businessdayconfig
from ..shared import holidaycutoff as shared_holidaycutoff
from ..shared import transittable as shared_transittable
from ..shared import warehousebaseddeliverytime as shared_warehousebaseddeliverytime


@dataclass_json
@dataclasses.dataclass
class DeliveryTime:
    cutoff_time: Optional[shared_cutofftime.CutoffTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cutoffTime') }})
    handling_business_day_config: Optional[shared_businessdayconfig.BusinessDayConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handlingBusinessDayConfig') }})
    holiday_cutoffs: Optional[list[shared_holidaycutoff.HolidayCutoff]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holidayCutoffs') }})
    max_handling_time_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxHandlingTimeInDays') }})
    max_transit_time_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTransitTimeInDays') }})
    min_handling_time_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minHandlingTimeInDays') }})
    min_transit_time_in_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minTransitTimeInDays') }})
    transit_business_day_config: Optional[shared_businessdayconfig.BusinessDayConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitBusinessDayConfig') }})
    transit_time_table: Optional[shared_transittable.TransitTable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitTimeTable') }})
    warehouse_based_delivery_times: Optional[list[shared_warehousebaseddeliverytime.WarehouseBasedDeliveryTime]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouseBasedDeliveryTimes') }})
    
