import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_service_us_app_to_person_usecase as shared_messaging_v1_service_us_app_to_person_usecase


FETCH_US_APP_TO_PERSON_USECASE_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class FetchUsAppToPersonUsecasePathParams:
    messaging_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MessagingServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUsAppToPersonUsecaseQueryParams:
    brand_registration_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'BrandRegistrationSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchUsAppToPersonUsecaseSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUsAppToPersonUsecaseRequest:
    path_params: FetchUsAppToPersonUsecasePathParams = dataclasses.field()
    query_params: FetchUsAppToPersonUsecaseQueryParams = dataclasses.field()
    security: FetchUsAppToPersonUsecaseSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUsAppToPersonUsecaseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_service_us_app_to_person_usecase: Optional[shared_messaging_v1_service_us_app_to_person_usecase.MessagingV1ServiceUsAppToPersonUsecase] = dataclasses.field(default=None)
    
