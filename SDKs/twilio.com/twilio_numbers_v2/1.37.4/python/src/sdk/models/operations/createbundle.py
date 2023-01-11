import dataclasses
from typing import Optional
from enum import Enum
from ..shared import bundle_enum_end_user_type_enum as shared_bundle_enum_end_user_type_enum
from ..shared import security as shared_security
from ..shared import numbers_v2_regulatory_compliance_bundle as shared_numbers_v2_regulatory_compliance_bundle


CREATE_BUNDLE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclasses.dataclass
class CreateBundleCreateBundleRequest:
    email: str = dataclasses.field(metadata={'form': { 'field_name': 'Email' }})
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    end_user_type: Optional[shared_bundle_enum_end_user_type_enum.BundleEnumEndUserTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'EndUserType' }})
    iso_country: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IsoCountry' }})
    number_type: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NumberType' }})
    regulation_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'RegulationSid' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclasses.dataclass
class CreateBundleSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateBundleRequest:
    security: CreateBundleSecurity = dataclasses.field()
    request: Optional[CreateBundleCreateBundleRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateBundleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    numbers_v2_regulatory_compliance_bundle: Optional[shared_numbers_v2_regulatory_compliance_bundle.NumbersV2RegulatoryComplianceBundle] = dataclasses.field(default=None)
    
