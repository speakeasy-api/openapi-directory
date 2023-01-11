import dataclasses
from typing import Any,Optional
from ..shared import pingresponse as shared_pingresponse


@dataclasses.dataclass
class PingWebhookV1PathParams:
    webhook_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webhookId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PingWebhookV1Request:
    path_params: PingWebhookV1PathParams = dataclasses.field()
    

@dataclasses.dataclass
class PingWebhookV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ping_response: Optional[shared_pingresponse.PingResponse] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
