import dataclasses
from typing import Optional
from enum import Enum
from ..shared import webhook_enum_status_enum as shared_webhook_enum_status_enum
from ..shared import webhook_enum_version_enum as shared_webhook_enum_version_enum
from ..shared import security as shared_security
from ..shared import verify_v2_service_webhook as shared_verify_v2_service_webhook


CREATE_WEBHOOK_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class CreateWebhookPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateWebhookCreateWebhookRequest:
    event_types: list[str] = dataclasses.field(metadata={'form': { 'field_name': 'EventTypes' }})
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    webhook_url: str = dataclasses.field(metadata={'form': { 'field_name': 'WebhookUrl' }})
    status: Optional[shared_webhook_enum_status_enum.WebhookEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    version: Optional[shared_webhook_enum_version_enum.WebhookEnumVersionEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Version' }})
    

@dataclasses.dataclass
class CreateWebhookSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateWebhookRequest:
    path_params: CreateWebhookPathParams = dataclasses.field()
    security: CreateWebhookSecurity = dataclasses.field()
    request: Optional[CreateWebhookCreateWebhookRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    verify_v2_service_webhook: Optional[shared_verify_v2_service_webhook.VerifyV2ServiceWebhook] = dataclasses.field(default=None)
    
