import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import supersim_v1_fleet as shared_supersim_v1_fleet


UPDATE_FLEET_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class UpdateFleetPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateFleetUpdateFleetRequestIPCommandsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateFleetUpdateFleetRequest:
    data_limit: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DataLimit' }})
    ip_commands_method: Optional[UpdateFleetUpdateFleetRequestIPCommandsMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IpCommandsMethod' }})
    ip_commands_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IpCommandsUrl' }})
    network_access_profile: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'NetworkAccessProfile' }})
    sms_commands_method: Optional[UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsCommandsMethod' }})
    sms_commands_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'SmsCommandsUrl' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class UpdateFleetSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateFleetRequest:
    path_params: UpdateFleetPathParams = dataclasses.field()
    security: UpdateFleetSecurity = dataclasses.field()
    request: Optional[UpdateFleetUpdateFleetRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateFleetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_fleet: Optional[shared_supersim_v1_fleet.SupersimV1Fleet] = dataclasses.field(default=None)
    
