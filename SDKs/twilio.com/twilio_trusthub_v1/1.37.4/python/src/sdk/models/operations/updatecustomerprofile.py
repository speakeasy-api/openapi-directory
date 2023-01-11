import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import customer_profile_enum_status_enum as shared_customer_profile_enum_status_enum
from ..shared import security as shared_security
from ..shared import trusthub_v1_customer_profile as shared_trusthub_v1_customer_profile


UPDATE_CUSTOMER_PROFILE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class UpdateCustomerProfilePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCustomerProfileUpdateCustomerProfileRequest:
    email: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Email' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared_customer_profile_enum_status_enum.CustomerProfileEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    status_callback: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclasses.dataclass
class UpdateCustomerProfileSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateCustomerProfileRequest:
    path_params: UpdateCustomerProfilePathParams = dataclasses.field()
    security: UpdateCustomerProfileSecurity = dataclasses.field()
    request: Optional[UpdateCustomerProfileUpdateCustomerProfileRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateCustomerProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_customer_profile: Optional[shared_trusthub_v1_customer_profile.TrusthubV1CustomerProfile] = dataclasses.field(default=None)
    
