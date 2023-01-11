import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import weight_unit_enum as shared_weight_unit_enum
from ..shared import collect_on_delivery as shared_collect_on_delivery


@dataclass_json
@dataclasses.dataclass
class AdvancedShipmentOptionsWeight:
    r"""AdvancedShipmentOptionsWeight
    The weight of a package
    """
    
    unit: shared_weight_unit_enum.WeightUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class AdvancedShipmentOptions:
    r"""AdvancedShipmentOptions
    Advanced shipment options
    """
    
    bill_to_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bill_to_account') }})
    bill_to_country_code: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bill_to_country_code') }})
    bill_to_party: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bill_to_party') }})
    bill_to_postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bill_to_postal_code') }})
    collect_on_delivery: Optional[shared_collect_on_delivery.CollectOnDelivery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collect_on_delivery') }})
    contains_alcohol: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contains_alcohol') }})
    custom_field1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_field1') }})
    custom_field2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_field2') }})
    custom_field3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_field3') }})
    delivered_duty_paid: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivered_duty_paid') }})
    dry_ice: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dry_ice') }})
    dry_ice_weight: Optional[AdvancedShipmentOptionsWeight] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dry_ice_weight') }})
    freight_class: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freight_class') }})
    non_machinable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_machinable') }})
    saturday_delivery: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturday_delivery') }})
    use_ups_ground_freight_pricing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_ups_ground_freight_pricing') }})
    
