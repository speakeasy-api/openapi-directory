import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import supersim_v1_fleet as shared_supersim_v1_fleet


CREATE_FLEET_SERVERS = [
	"https://supersim.twilio.com",
]

class CreateFleetCreateFleetRequestIPCommandsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class CreateFleetCreateFleetRequestSmsCommandsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateFleetCreateFleetRequest:
    network_access_profile: str = dataclasses.field(metadata={'form': { 'field_name': 'NetworkAccessProfile' }})
    data_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DataEnabled' }})
    data_limit: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DataLimit' }})
    ip_commands_method: Optional[CreateFleetCreateFleetRequestIPCommandsMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IpCommandsMethod' }})
    ip_commands_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IpCommandsUrl' }})
    sms_commands_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsCommandsEnabled' }})
    sms_commands_method: Optional[CreateFleetCreateFleetRequestSmsCommandsMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsCommandsMethod' }})
    sms_commands_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsCommandsUrl' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateFleetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateFleetRequest:
    security: CreateFleetSecurity = dataclasses.field()
    request: Optional[CreateFleetCreateFleetRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateFleetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_fleet: Optional[shared_supersim_v1_fleet.SupersimV1Fleet] = dataclasses.field(default=None)
    
