import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deliverytime as shared_deliverytime
from ..shared import price as shared_price
from ..shared import minimumordervaluetable as shared_minimumordervaluetable
from ..shared import pickupcarrierservice as shared_pickupcarrierservice
from ..shared import rategroup as shared_rategroup


@dataclass_json
@dataclasses.dataclass
class Service:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    delivery_country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryCountry') }})
    delivery_time: Optional[shared_deliverytime.DeliveryTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryTime') }})
    eligibility: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eligibility') }})
    minimum_order_value: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumOrderValue') }})
    minimum_order_value_table: Optional[shared_minimumordervaluetable.MinimumOrderValueTable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumOrderValueTable') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pickup_service: Optional[shared_pickupcarrierservice.PickupCarrierService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupService') }})
    rate_groups: Optional[list[shared_rategroup.RateGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateGroups') }})
    shipment_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentType') }})
    
