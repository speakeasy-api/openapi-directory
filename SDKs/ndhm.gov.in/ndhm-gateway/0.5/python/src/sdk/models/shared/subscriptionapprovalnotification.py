import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptionstatus_enum as shared_subscriptionstatus_enum
from ..shared import hiusubscription as shared_hiusubscription


@dataclass_json
@dataclasses.dataclass
class SubscriptionApprovalNotificationNotification:
    status: shared_subscriptionstatus_enum.SubscriptionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscription: Optional[shared_hiusubscription.HiuSubscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    subscription_request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionRequestId') }})
    

@dataclass_json
@dataclasses.dataclass
class SubscriptionApprovalNotification:
    notification: SubscriptionApprovalNotificationNotification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
