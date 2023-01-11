import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_credential_list_mapping as shared_api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_credential_list_mapping


FETCH_SIP_AUTH_CALLS_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchSipAuthCallsCredentialListMappingPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSipAuthCallsCredentialListMappingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSipAuthCallsCredentialListMappingRequest:
    path_params: FetchSipAuthCallsCredentialListMappingPathParams = dataclasses.field()
    security: FetchSipAuthCallsCredentialListMappingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSipAuthCallsCredentialListMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_credential_list_mapping: Optional[shared_api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_credential_list_mapping.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping] = dataclasses.field(default=None)
    
