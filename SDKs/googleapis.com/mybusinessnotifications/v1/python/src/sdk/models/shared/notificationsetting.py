import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NotificationSettingNotificationTypesEnum(str, Enum):
    NOTIFICATION_TYPE_UNSPECIFIED = "NOTIFICATION_TYPE_UNSPECIFIED"
    GOOGLE_UPDATE = "GOOGLE_UPDATE"
    NEW_REVIEW = "NEW_REVIEW"
    UPDATED_REVIEW = "UPDATED_REVIEW"
    NEW_CUSTOMER_MEDIA = "NEW_CUSTOMER_MEDIA"
    NEW_QUESTION = "NEW_QUESTION"
    UPDATED_QUESTION = "UPDATED_QUESTION"
    NEW_ANSWER = "NEW_ANSWER"
    UPDATED_ANSWER = "UPDATED_ANSWER"
    DUPLICATE_LOCATION = "DUPLICATE_LOCATION"
    LOSS_OF_VOICE_OF_MERCHANT = "LOSS_OF_VOICE_OF_MERCHANT"
    VOICE_OF_MERCHANT_UPDATED = "VOICE_OF_MERCHANT_UPDATED"


@dataclass_json
@dataclasses.dataclass
class NotificationSetting:
    r"""NotificationSetting
    A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_types: Optional[list[NotificationSettingNotificationTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationTypes') }})
    pubsub_topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    
