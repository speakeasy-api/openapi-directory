import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_brand_registrations as shared_messaging_v1_brand_registrations


CREATE_BRAND_REGISTRATIONS_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class CreateBrandRegistrationsCreateBrandRegistrationsRequest:
    a2_p_profile_bundle_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'A2PProfileBundleSid' }})
    customer_profile_bundle_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'CustomerProfileBundleSid' }})
    brand_type: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BrandType' }})
    mock: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Mock' }})
    skip_automatic_sec_vet: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SkipAutomaticSecVet' }})
    

@dataclasses.dataclass
class CreateBrandRegistrationsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateBrandRegistrationsRequest:
    security: CreateBrandRegistrationsSecurity = dataclasses.field()
    request: Optional[CreateBrandRegistrationsCreateBrandRegistrationsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateBrandRegistrationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_brand_registrations: Optional[shared_messaging_v1_brand_registrations.MessagingV1BrandRegistrations] = dataclasses.field(default=None)
    
