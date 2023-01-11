import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SIP_AUTH_REGISTRATIONS_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class DeleteSipAuthRegistrationsCredentialListMappingPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSipAuthRegistrationsCredentialListMappingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSipAuthRegistrationsCredentialListMappingRequest:
    path_params: DeleteSipAuthRegistrationsCredentialListMappingPathParams = dataclasses.field()
    security: DeleteSipAuthRegistrationsCredentialListMappingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSipAuthRegistrationsCredentialListMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
