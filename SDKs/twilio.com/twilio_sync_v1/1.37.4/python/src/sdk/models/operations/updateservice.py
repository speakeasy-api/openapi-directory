import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service as shared_sync_v1_service


UPDATE_SERVICE_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class UpdateServicePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceUpdateServiceRequest:
    acl_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AclEnabled' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    reachability_debouncing_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReachabilityDebouncingEnabled' }})
    reachability_debouncing_window: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReachabilityDebouncingWindow' }})
    reachability_webhooks_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ReachabilityWebhooksEnabled' }})
    webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    webhooks_from_rest_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhooksFromRestEnabled' }})
    

@dataclasses.dataclass
class UpdateServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceRequest:
    path_params: UpdateServicePathParams = dataclasses.field()
    security: UpdateServiceSecurity = dataclasses.field()
    request: Optional[UpdateServiceUpdateServiceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service: Optional[shared_sync_v1_service.SyncV1Service] = dataclasses.field(default=None)
    
