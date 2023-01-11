import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SUBSCRIBED_EVENT_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class DeleteSubscribedEventPathParams:
    subscription_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SubscriptionSid', 'style': 'simple', 'explode': False }})
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSubscribedEventSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSubscribedEventRequest:
    path_params: DeleteSubscribedEventPathParams = dataclasses.field()
    security: DeleteSubscribedEventSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSubscribedEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
