import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SubscriptionContentDetailsActivityTypeEnum(str, Enum):
    SUBSCRIPTION_ACTIVITY_TYPE_UNSPECIFIED = "subscriptionActivityTypeUnspecified"
    ALL = "all"
    UPLOADS = "uploads"


@dataclass_json
@dataclasses.dataclass
class SubscriptionContentDetails:
    r"""SubscriptionContentDetails
    Details about the content to witch a subscription refers.
    """
    
    activity_type: Optional[SubscriptionContentDetailsActivityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    new_item_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newItemCount') }})
    total_item_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItemCount') }})
    
