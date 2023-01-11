import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import address_residential_indicator_enum as shared_address_residential_indicator_enum
from ..shared import delivery_confirmation_enum as shared_delivery_confirmation_enum
from ..shared import dimensions as shared_dimensions
from ..shared import weight as shared_weight


@dataclass_json
@dataclasses.dataclass
class EstimateRatesRequestBody:
    r"""EstimateRatesRequestBody
    A rate estimate request body
    """
    
    from_city_locality: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_city_locality') }})
    from_country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_country_code') }})
    from_postal_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_postal_code') }})
    ship_date: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_date') }})
    to_city_locality: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_city_locality') }})
    to_country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_country_code') }})
    to_postal_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_postal_code') }})
    to_state_province: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_state_province') }})
    weight: shared_weight.Weight = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    address_residential_indicator: Optional[shared_address_residential_indicator_enum.AddressResidentialIndicatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_residential_indicator') }})
    confirmation: Optional[shared_delivery_confirmation_enum.DeliveryConfirmationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmation') }})
    dimensions: Optional[shared_dimensions.Dimensions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    from_state_province: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_state_province') }})
    
