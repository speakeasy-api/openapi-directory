import dataclasses
from typing import Optional
from ..shared import getwebhookresponse as shared_getwebhookresponse


@dataclasses.dataclass
class GetWebhooksIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWebhooksIDRequest:
    path_params: GetWebhooksIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWebhooksIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_webhook_response: Optional[shared_getwebhookresponse.GetWebhookResponse] = dataclasses.field(default=None)
    
