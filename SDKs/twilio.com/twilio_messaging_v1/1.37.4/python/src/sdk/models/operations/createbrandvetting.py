import dataclasses
from typing import Optional
from enum import Enum
from ..shared import brand_vetting_enum_vetting_provider_enum as shared_brand_vetting_enum_vetting_provider_enum
from ..shared import security as shared_security
from ..shared import messaging_v1_brand_registrations_brand_vetting as shared_messaging_v1_brand_registrations_brand_vetting


CREATE_BRAND_VETTING_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class CreateBrandVettingPathParams:
    brand_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'BrandSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateBrandVettingCreateBrandVettingRequest:
    vetting_provider: shared_brand_vetting_enum_vetting_provider_enum.BrandVettingEnumVettingProviderEnum = dataclasses.field(metadata={'form': { 'field_name': 'VettingProvider' }})
    vetting_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VettingId' }})
    

@dataclasses.dataclass
class CreateBrandVettingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateBrandVettingRequest:
    path_params: CreateBrandVettingPathParams = dataclasses.field()
    security: CreateBrandVettingSecurity = dataclasses.field()
    request: Optional[CreateBrandVettingCreateBrandVettingRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateBrandVettingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_brand_registrations_brand_vetting: Optional[shared_messaging_v1_brand_registrations_brand_vetting.MessagingV1BrandRegistrationsBrandVetting] = dataclasses.field(default=None)
    
