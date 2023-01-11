import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_wireless_rate_plan as shared_preview_wireless_rate_plan


CREATE_WIRELESS_RATE_PLAN_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateWirelessRatePlanCreateWirelessRatePlanRequest:
    commands_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CommandsEnabled' }})
    data_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DataEnabled' }})
    data_limit: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DataLimit' }})
    data_metering: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DataMetering' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    international_roaming: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'InternationalRoaming' }})
    messaging_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MessagingEnabled' }})
    national_roaming_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NationalRoamingEnabled' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    voice_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'VoiceEnabled' }})
    

@dataclasses.dataclass
class CreateWirelessRatePlanSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateWirelessRatePlanRequest:
    security: CreateWirelessRatePlanSecurity = dataclasses.field()
    request: Optional[CreateWirelessRatePlanCreateWirelessRatePlanRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateWirelessRatePlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_wireless_rate_plan: Optional[shared_preview_wireless_rate_plan.PreviewWirelessRatePlan] = dataclasses.field(default=None)
    
