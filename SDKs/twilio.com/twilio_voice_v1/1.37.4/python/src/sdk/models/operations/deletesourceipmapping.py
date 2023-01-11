import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SOURCE_IP_MAPPING_SERVERS = [
	"https://voice.twilio.com",
]


@dataclasses.dataclass
class DeleteSourceIPMappingPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSourceIPMappingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSourceIPMappingRequest:
    path_params: DeleteSourceIPMappingPathParams = dataclasses.field()
    security: DeleteSourceIPMappingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSourceIPMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
