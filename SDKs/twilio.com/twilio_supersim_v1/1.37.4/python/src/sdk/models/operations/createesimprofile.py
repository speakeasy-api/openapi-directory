import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import supersim_v1_esim_profile as shared_supersim_v1_esim_profile


CREATE_ESIM_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]

class CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class CreateEsimProfileCreateEsimProfileRequest:
    callback_method: Optional[CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackMethod' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    eid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Eid' }})
    

@dataclasses.dataclass
class CreateEsimProfileSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateEsimProfileRequest:
    security: CreateEsimProfileSecurity = dataclasses.field()
    request: Optional[CreateEsimProfileCreateEsimProfileRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateEsimProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_esim_profile: Optional[shared_supersim_v1_esim_profile.SupersimV1EsimProfile] = dataclasses.field(default=None)
    
