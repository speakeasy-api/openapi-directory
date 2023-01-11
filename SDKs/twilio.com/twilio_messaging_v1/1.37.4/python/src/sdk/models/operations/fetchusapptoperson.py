import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_service_us_app_to_person as shared_messaging_v1_service_us_app_to_person


FETCH_US_APP_TO_PERSON_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class FetchUsAppToPersonPathParams:
    messaging_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MessagingServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUsAppToPersonSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUsAppToPersonRequest:
    path_params: FetchUsAppToPersonPathParams = dataclasses.field()
    security: FetchUsAppToPersonSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUsAppToPersonResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_service_us_app_to_person: Optional[shared_messaging_v1_service_us_app_to_person.MessagingV1ServiceUsAppToPerson] = dataclasses.field(default=None)
    
