import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_service_us_app_to_person as shared_messaging_v1_service_us_app_to_person


CREATE_US_APP_TO_PERSON_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class CreateUsAppToPersonPathParams:
    messaging_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MessagingServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateUsAppToPersonCreateUsAppToPersonRequest:
    brand_registration_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'BrandRegistrationSid' }})
    description: str = dataclasses.field(metadata={'form': { 'field_name': 'Description' }})
    has_embedded_links: bool = dataclasses.field(metadata={'form': { 'field_name': 'HasEmbeddedLinks' }})
    has_embedded_phone: bool = dataclasses.field(metadata={'form': { 'field_name': 'HasEmbeddedPhone' }})
    message_samples: list[str] = dataclasses.field(metadata={'form': { 'field_name': 'MessageSamples' }})
    us_app_to_person_usecase: str = dataclasses.field(metadata={'form': { 'field_name': 'UsAppToPersonUsecase' }})
    help_keywords: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'HelpKeywords' }})
    help_message: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'HelpMessage' }})
    message_flow: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MessageFlow' }})
    opt_in_keywords: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'OptInKeywords' }})
    opt_in_message: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'OptInMessage' }})
    opt_out_keywords: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'OptOutKeywords' }})
    opt_out_message: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'OptOutMessage' }})
    

@dataclasses.dataclass
class CreateUsAppToPersonSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateUsAppToPersonRequest:
    path_params: CreateUsAppToPersonPathParams = dataclasses.field()
    security: CreateUsAppToPersonSecurity = dataclasses.field()
    request: Optional[CreateUsAppToPersonCreateUsAppToPersonRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUsAppToPersonResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_service_us_app_to_person: Optional[shared_messaging_v1_service_us_app_to_person.MessagingV1ServiceUsAppToPerson] = dataclasses.field(default=None)
    
