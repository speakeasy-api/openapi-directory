import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import places as shared_places

class ServiceAreaBusinessBusinessTypeEnum(str, Enum):
    BUSINESS_TYPE_UNSPECIFIED = "BUSINESS_TYPE_UNSPECIFIED"
    CUSTOMER_LOCATION_ONLY = "CUSTOMER_LOCATION_ONLY"
    CUSTOMER_AND_BUSINESS_LOCATION = "CUSTOMER_AND_BUSINESS_LOCATION"


@dataclass_json
@dataclasses.dataclass
class ServiceAreaBusiness:
    r"""ServiceAreaBusiness
    Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).
    """
    
    business_type: Optional[ServiceAreaBusinessBusinessTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessType') }})
    places: Optional[shared_places.Places] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('places') }})
    region_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
