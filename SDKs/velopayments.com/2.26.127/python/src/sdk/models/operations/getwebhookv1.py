import dataclasses
from typing import Any,Optional
from ..shared import webhookresponse as shared_webhookresponse


@dataclasses.dataclass
class GetWebhookV1PathParams:
    webhook_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWebhookV1Request:
    path_params: GetWebhookV1PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWebhookV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_response: Optional[shared_webhookresponse.WebhookResponse] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
