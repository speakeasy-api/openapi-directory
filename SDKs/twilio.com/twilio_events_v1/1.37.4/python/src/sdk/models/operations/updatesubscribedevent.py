import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import events_v1_subscription_subscribed_event as shared_events_v1_subscription_subscribed_event


UPDATE_SUBSCRIBED_EVENT_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class UpdateSubscribedEventPathParams:
    subscription_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SubscriptionSid', 'style': 'simple', 'explode': False }})
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSubscribedEventUpdateSubscribedEventRequest:
    schema_version: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SchemaVersion' }})
    

@dataclasses.dataclass
class UpdateSubscribedEventSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSubscribedEventRequest:
    path_params: UpdateSubscribedEventPathParams = dataclasses.field()
    security: UpdateSubscribedEventSecurity = dataclasses.field()
    request: Optional[UpdateSubscribedEventUpdateSubscribedEventRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSubscribedEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_v1_subscription_subscribed_event: Optional[shared_events_v1_subscription_subscribed_event.EventsV1SubscriptionSubscribedEvent] = dataclasses.field(default=None)
    
