import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import wireless_v1_rate_plan as shared_wireless_v1_rate_plan


CREATE_RATE_PLAN_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclasses.dataclass
class CreateRatePlanCreateRatePlanRequest:
    data_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DataEnabled' }})
    data_limit: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DataLimit' }})
    data_metering: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DataMetering' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    international_roaming: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'InternationalRoaming' }})
    international_roaming_data_limit: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'InternationalRoamingDataLimit' }})
    messaging_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MessagingEnabled' }})
    national_roaming_data_limit: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NationalRoamingDataLimit' }})
    national_roaming_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NationalRoamingEnabled' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    voice_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceEnabled' }})
    

@dataclasses.dataclass
class CreateRatePlanSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateRatePlanRequest:
    security: CreateRatePlanSecurity = dataclasses.field()
    request: Optional[CreateRatePlanCreateRatePlanRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateRatePlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    wireless_v1_rate_plan: Optional[shared_wireless_v1_rate_plan.WirelessV1RatePlan] = dataclasses.field(default=None)
    
