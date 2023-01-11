import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import events_v1_subscription as shared_events_v1_subscription


UPDATE_SUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class UpdateSubscriptionPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSubscriptionUpdateSubscriptionRequest:
    description: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Description' }})
    sink_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SinkSid' }})
    

@dataclasses.dataclass
class UpdateSubscriptionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSubscriptionRequest:
    path_params: UpdateSubscriptionPathParams = dataclasses.field()
    security: UpdateSubscriptionSecurity = dataclasses.field()
    request: Optional[UpdateSubscriptionUpdateSubscriptionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_v1_subscription: Optional[shared_events_v1_subscription.EventsV1Subscription] = dataclasses.field(default=None)
    
