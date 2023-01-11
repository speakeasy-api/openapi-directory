import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum(str, Enum):
    CUSTOMER_TYPE_UNSPECIFIED = "CUSTOMER_TYPE_UNSPECIFIED"
    DOMAIN = "DOMAIN"
    TEAM = "TEAM"

class GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum(str, Enum):
    PROMOTIONAL_TYPE_UNSPECIFIED = "PROMOTIONAL_TYPE_UNSPECIFIED"
    NEW_UPGRADE = "NEW_UPGRADE"
    TRANSFER = "TRANSFER"
    PROMOTION_SWITCH = "PROMOTION_SWITCH"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1CustomerConstraints:
    r"""GoogleCloudChannelV1CustomerConstraints
    Represents constraints required to purchase the Offer for a customer.
    """
    
    allowed_customer_types: Optional[list[GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedCustomerTypes') }})
    allowed_regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedRegions') }})
    promotional_order_types: Optional[list[GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionalOrderTypes') }})
    
