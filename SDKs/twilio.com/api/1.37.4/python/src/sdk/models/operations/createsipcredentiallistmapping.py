import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_domain_sip_credential_list_mapping as shared_api_v2010_account_sip_sip_domain_sip_credential_list_mapping


CREATE_SIP_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateSipCredentialListMappingPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSipCredentialListMappingCreateSipCredentialListMappingRequest:
    credential_list_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'CredentialListSid' }})
    

@dataclasses.dataclass
class CreateSipCredentialListMappingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSipCredentialListMappingRequest:
    path_params: CreateSipCredentialListMappingPathParams = dataclasses.field()
    security: CreateSipCredentialListMappingSecurity = dataclasses.field()
    request: Optional[CreateSipCredentialListMappingCreateSipCredentialListMappingRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSipCredentialListMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_sip_sip_domain_sip_credential_list_mapping: Optional[shared_api_v2010_account_sip_sip_domain_sip_credential_list_mapping.APIV2010AccountSipSipDomainSipCredentialListMapping] = dataclasses.field(default=None)
    
