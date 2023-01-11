import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptioncategory_enum as shared_subscriptioncategory_enum
from ..shared import hiusubscriptioneventcontent as shared_hiusubscriptioneventcontent


@dataclass_json
@dataclasses.dataclass
class HiuSubscriptionNotificationEvent:
    category: shared_subscriptioncategory_enum.SubscriptionCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    content: shared_hiusubscriptioneventcontent.HiuSubscriptionEventContent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    published: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('published'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subscription_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    

@dataclass_json
@dataclasses.dataclass
class HiuSubscriptionNotification:
    event: HiuSubscriptionNotificationEvent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
