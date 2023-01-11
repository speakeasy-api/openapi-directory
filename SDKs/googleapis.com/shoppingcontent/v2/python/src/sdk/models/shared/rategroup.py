import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import carrierrate as shared_carrierrate
from ..shared import table as shared_table
from ..shared import value as shared_value


@dataclass_json
@dataclasses.dataclass
class RateGroup:
    applicable_shipping_labels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicableShippingLabels') }})
    carrier_rates: Optional[list[shared_carrierrate.CarrierRate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierRates') }})
    main_table: Optional[shared_table.Table] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainTable') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    single_value: Optional[shared_value.Value] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleValue') }})
    subtables: Optional[list[shared_table.Table]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtables') }})
    
