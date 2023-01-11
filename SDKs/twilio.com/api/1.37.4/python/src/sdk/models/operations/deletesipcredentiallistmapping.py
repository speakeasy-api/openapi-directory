import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SIP_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class DeleteSipCredentialListMappingPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSipCredentialListMappingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSipCredentialListMappingRequest:
    path_params: DeleteSipCredentialListMappingPathParams = dataclasses.field()
    security: DeleteSipCredentialListMappingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSipCredentialListMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
