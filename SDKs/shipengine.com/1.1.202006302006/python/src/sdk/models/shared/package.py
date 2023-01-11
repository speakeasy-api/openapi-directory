import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currency_enum as shared_currency_enum
from ..shared import dimensions as shared_dimensions
from ..shared import label_messages as shared_label_messages
from ..shared import weight as shared_weight


@dataclass_json
@dataclasses.dataclass
class PackageMonetaryValue:
    r"""PackageMonetaryValue
    A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.
    
    """
    
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: shared_currency_enum.CurrencyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    

@dataclass_json
@dataclasses.dataclass
class PackageInput:
    r"""PackageInput
    A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
    """
    
    weight: shared_weight.Weight = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    dimensions: Optional[shared_dimensions.Dimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    external_package_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_package_id') }})
    insured_value: Optional[PackageMonetaryValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insured_value') }})
    label_messages: Optional[shared_label_messages.LabelMessages] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_messages') }})
    package_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_code') }})
    

@dataclass_json
@dataclasses.dataclass
class Package:
    r"""Package
    A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)
    """
    
    weight: shared_weight.Weight = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    dimensions: Optional[shared_dimensions.Dimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    external_package_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_package_id') }})
    insured_value: Optional[PackageMonetaryValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insured_value') }})
    label_messages: Optional[shared_label_messages.LabelMessages] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_messages') }})
    package_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package_code') }})
    tracking_number: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_number') }})
    
