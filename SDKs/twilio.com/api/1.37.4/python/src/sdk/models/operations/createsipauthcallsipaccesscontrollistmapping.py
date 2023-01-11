import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_ip_access_control_list_mapping as shared_api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_ip_access_control_list_mapping


CREATE_SIP_AUTH_CALLS_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateSipAuthCallsIPAccessControlListMappingPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSipAuthCallsIPAccessControlListMappingCreateSipAuthCallsIPAccessControlListMappingRequest:
    ip_access_control_list_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'IpAccessControlListSid' }})
    

@dataclasses.dataclass
class CreateSipAuthCallsIPAccessControlListMappingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSipAuthCallsIPAccessControlListMappingRequest:
    path_params: CreateSipAuthCallsIPAccessControlListMappingPathParams = dataclasses.field()
    security: CreateSipAuthCallsIPAccessControlListMappingSecurity = dataclasses.field()
    request: Optional[CreateSipAuthCallsIPAccessControlListMappingCreateSipAuthCallsIPAccessControlListMappingRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSipAuthCallsIPAccessControlListMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_ip_access_control_list_mapping: Optional[shared_api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_ip_access_control_list_mapping.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIPAccessControlListMapping] = dataclasses.field(default=None)
    
