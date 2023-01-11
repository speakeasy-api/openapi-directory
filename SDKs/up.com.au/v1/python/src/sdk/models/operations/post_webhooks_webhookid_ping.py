import dataclasses
from typing import Optional
from ..shared import webhookeventcallback as shared_webhookeventcallback


@dataclasses.dataclass
class PostWebhooksWebhookIDPingPathParams:
    webhook_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWebhooksWebhookIDPingRequest:
    path_params: PostWebhooksWebhookIDPingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostWebhooksWebhookIDPingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_event_callback: Optional[shared_webhookeventcallback.WebhookEventCallback] = dataclasses.field(default=None)
    
