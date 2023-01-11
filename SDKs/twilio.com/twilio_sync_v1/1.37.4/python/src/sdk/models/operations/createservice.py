import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service as shared_sync_v1_service


CREATE_SERVICE_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class CreateServiceCreateServiceRequest:
    acl_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AclEnabled' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    reachability_debouncing_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReachabilityDebouncingEnabled' }})
    reachability_debouncing_window: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReachabilityDebouncingWindow' }})
    reachability_webhooks_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReachabilityWebhooksEnabled' }})
    webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    webhooks_from_rest_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhooksFromRestEnabled' }})
    

@dataclasses.dataclass
class CreateServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateServiceRequest:
    security: CreateServiceSecurity = dataclasses.field()
    request: Optional[CreateServiceCreateServiceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service: Optional[shared_sync_v1_service.SyncV1Service] = dataclasses.field(default=None)
    
