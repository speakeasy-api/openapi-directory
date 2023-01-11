import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service as shared_preview_sync_service


CREATE_SYNC_SERVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateSyncServiceCreateSyncServiceRequest:
    acl_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AclEnabled' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    reachability_webhooks_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReachabilityWebhooksEnabled' }})
    webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    

@dataclasses.dataclass
class CreateSyncServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSyncServiceRequest:
    security: CreateSyncServiceSecurity = dataclasses.field()
    request: Optional[CreateSyncServiceCreateSyncServiceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSyncServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service: Optional[shared_preview_sync_service.PreviewSyncService] = dataclasses.field(default=None)
    
