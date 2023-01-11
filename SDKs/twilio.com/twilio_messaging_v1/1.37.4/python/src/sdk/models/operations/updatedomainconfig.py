import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import messaging_v1_domain_config as shared_messaging_v1_domain_config


UPDATE_DOMAIN_CONFIG_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclasses.dataclass
class UpdateDomainConfigPathParams:
    domain_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDomainConfigUpdateDomainConfigRequest:
    messaging_service_sids: list[str] = dataclasses.field(metadata={'form': { 'field_name': 'MessagingServiceSids' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FallbackUrl' }})
    messaging_service_sids_action: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MessagingServiceSidsAction' }})
    

@dataclasses.dataclass
class UpdateDomainConfigSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateDomainConfigRequest:
    path_params: UpdateDomainConfigPathParams = dataclasses.field()
    security: UpdateDomainConfigSecurity = dataclasses.field()
    request: Optional[UpdateDomainConfigUpdateDomainConfigRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateDomainConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    messaging_v1_domain_config: Optional[shared_messaging_v1_domain_config.MessagingV1DomainConfig] = dataclasses.field(default=None)
    
