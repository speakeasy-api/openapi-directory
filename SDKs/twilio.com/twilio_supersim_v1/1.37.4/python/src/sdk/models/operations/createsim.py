import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import supersim_v1_sim as shared_supersim_v1_sim


CREATE_SIM_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class CreateSimCreateSimRequest:
    iccid: str = dataclasses.field(metadata={'form': { 'field_name': 'Iccid' }})
    registration_code: str = dataclasses.field(metadata={'form': { 'field_name': 'RegistrationCode' }})
    

@dataclasses.dataclass
class CreateSimSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSimRequest:
    security: CreateSimSecurity = dataclasses.field()
    request: Optional[CreateSimCreateSimRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSimResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supersim_v1_sim: Optional[shared_supersim_v1_sim.SupersimV1Sim] = dataclasses.field(default=None)
    
