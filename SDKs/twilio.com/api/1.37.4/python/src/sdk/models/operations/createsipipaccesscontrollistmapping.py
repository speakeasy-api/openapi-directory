import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_domain_sip_ip_access_control_list_mapping as shared_api_v2010_account_sip_sip_domain_sip_ip_access_control_list_mapping


CREATE_SIP_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateSipIPAccessControlListMappingPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSipIPAccessControlListMappingCreateSipIPAccessControlListMappingRequest:
    ip_access_control_list_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'IpAccessControlListSid' }})
    

@dataclasses.dataclass
class CreateSipIPAccessControlListMappingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSipIPAccessControlListMappingRequest:
    path_params: CreateSipIPAccessControlListMappingPathParams = dataclasses.field()
    security: CreateSipIPAccessControlListMappingSecurity = dataclasses.field()
    request: Optional[CreateSipIPAccessControlListMappingCreateSipIPAccessControlListMappingRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSipIPAccessControlListMappingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_sip_sip_domain_sip_ip_access_control_list_mapping: Optional[shared_api_v2010_account_sip_sip_domain_sip_ip_access_control_list_mapping.APIV2010AccountSipSipDomainSipIPAccessControlListMapping] = dataclasses.field(default=None)
    
