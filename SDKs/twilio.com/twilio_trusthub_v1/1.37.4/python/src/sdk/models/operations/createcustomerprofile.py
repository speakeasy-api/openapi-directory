import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_customer_profile as shared_trusthub_v1_customer_profile


CREATE_CUSTOMER_PROFILE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class CreateCustomerProfileCreateCustomerProfileRequest:
    email: str = dataclasses.field(metadata={'form': { 'field_name': 'Email' }})
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    policy_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'PolicySid' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclasses.dataclass
class CreateCustomerProfileSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateCustomerProfileRequest:
    security: CreateCustomerProfileSecurity = dataclasses.field()
    request: Optional[CreateCustomerProfileCreateCustomerProfileRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCustomerProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_customer_profile: Optional[shared_trusthub_v1_customer_profile.TrusthubV1CustomerProfile] = dataclasses.field(default=None)
    
