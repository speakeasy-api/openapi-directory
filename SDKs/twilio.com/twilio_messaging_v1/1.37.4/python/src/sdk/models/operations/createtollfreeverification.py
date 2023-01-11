import dataclasses
from typing import Optional
from enum import Enum
from ..shared import tollfree_verification_enum_opt_in_type_enum as shared_tollfree_verification_enum_opt_in_type_enum
from ..shared import security as shared_security
from ..shared import messaging_v1_tollfree_verification as shared_messaging_v1_tollfree_verification


CREATE_TOLLFREE_VERIFICATION_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class CreateTollfreeVerificationCreateTollfreeVerificationRequest:
    business_name: str = dataclasses.field(metadata={'form': { 'field_name': 'BusinessName' }})
    business_website: str = dataclasses.field(metadata={'form': { 'field_name': 'BusinessWebsite' }})
    message_volume: str = dataclasses.field(metadata={'form': { 'field_name': 'MessageVolume' }})
    notification_email: str = dataclasses.field(metadata={'form': { 'field_name': 'NotificationEmail' }})
    opt_in_image_urls: list[str] = dataclasses.field(metadata={'form': { 'field_name': 'OptInImageUrls' }})
    opt_in_type: shared_tollfree_verification_enum_opt_in_type_enum.TollfreeVerificationEnumOptInTypeEnum = dataclasses.field(metadata={'form': { 'field_name': 'OptInType' }})
    production_message_sample: str = dataclasses.field(metadata={'form': { 'field_name': 'ProductionMessageSample' }})
    tollfree_phone_number_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'TollfreePhoneNumberSid' }})
    use_case_categories: list[str] = dataclasses.field(metadata={'form': { 'field_name': 'UseCaseCategories' }})
    use_case_summary: str = dataclasses.field(metadata={'form': { 'field_name': 'UseCaseSummary' }})
    additional_information: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AdditionalInformation' }})
    business_city: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BusinessCity' }})
    business_contact_email: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BusinessContactEmail' }})
    business_contact_first_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BusinessContactFirstName' }})
    business_contact_last_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BusinessContactLastName' }})
    business_contact_phone: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BusinessContactPhone' }})
    business_country: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BusinessCountry' }})
    business_postal_code: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BusinessPostalCode' }})
    business_state_province_region: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BusinessStateProvinceRegion' }})
    business_street_address: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BusinessStreetAddress' }})
    business_street_address2: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'BusinessStreetAddress2' }})
    customer_profile_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CustomerProfileSid' }})
    

@dataclasses.dataclass
class CreateTollfreeVerificationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateTollfreeVerificationRequest:
    security: CreateTollfreeVerificationSecurity = dataclasses.field()
    request: Optional[CreateTollfreeVerificationCreateTollfreeVerificationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTollfreeVerificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_tollfree_verification: Optional[shared_messaging_v1_tollfree_verification.MessagingV1TollfreeVerification] = dataclasses.field(default=None)
    
