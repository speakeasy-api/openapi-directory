import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OrderContactContactTypeEnum(str, Enum):
    PLANNING_ORDER_CONTACT_BUYER_CONTACT = "PLANNING_ORDER_CONTACT_BUYER_CONTACT"
    PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT = "PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT"
    PLANNING_ORDER_CONTACT_SELLER_CONTACT = "PLANNING_ORDER_CONTACT_SELLER_CONTACT"


@dataclass_json
@dataclasses.dataclass
class OrderContact:
    r"""OrderContact
    Contact of an order.
    """
    
    contact_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactInfo') }})
    contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactName') }})
    contact_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactTitle') }})
    contact_type: Optional[OrderContactContactTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactType') }})
    signature_user_profile_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatureUserProfileId') }})
    
