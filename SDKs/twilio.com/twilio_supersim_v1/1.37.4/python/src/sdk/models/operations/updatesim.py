import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import sim_enum_status_update_enum as shared_sim_enum_status_update_enum
from ..shared import security as shared_security
from ..shared import supersim_v1_sim as shared_supersim_v1_sim


UPDATE_SIM_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class UpdateSimPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateSimUpdateSimRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateSimUpdateSimRequest:
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AccountSid' }})
    callback_method: Optional[UpdateSimUpdateSimRequestCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    fleet: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Fleet' }})
    status: Optional[shared_sim_enum_status_update_enum.SimEnumStatusUpdateEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class UpdateSimSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSimRequest:
    path_params: UpdateSimPathParams = dataclasses.field()
    security: UpdateSimSecurity = dataclasses.field()
    request: Optional[UpdateSimUpdateSimRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSimResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_sim: Optional[shared_supersim_v1_sim.SupersimV1Sim] = dataclasses.field(default=None)
    
