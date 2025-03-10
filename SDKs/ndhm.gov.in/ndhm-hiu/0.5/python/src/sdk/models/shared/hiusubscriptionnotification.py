"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import hiusubscriptioneventcontent as shared_hiusubscriptioneventcontent
from ..shared import subscriptioncategory_enum as shared_subscriptioncategory_enum
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class HIUSubscriptionNotificationEvent:
    
    category: shared_subscriptioncategory_enum.SubscriptionCategoryEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('category') }})  
    content: shared_hiusubscriptioneventcontent.HIUSubscriptionEventContent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('content') }})  
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})  
    published: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('published'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    r"""Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ"""  
    subscription_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subscriptionId') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class HIUSubscriptionNotification:
    
    event: HIUSubscriptionNotificationEvent = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('event') }})  
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('requestId') }})
    r"""a nonce, unique for each HTTP request"""  
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    r"""Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ"""  
    