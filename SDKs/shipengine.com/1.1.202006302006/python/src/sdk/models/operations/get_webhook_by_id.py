import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import get_webhook_by_id_response_body as shared_get_webhook_by_id_response_body


@dataclasses.dataclass
class GetWebhookByIDPathParams:
    webhook_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webhook_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWebhookByIDRequest:
    path_params: GetWebhookByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWebhookByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_webhook_by_id_response_body: Optional[shared_get_webhook_by_id_response_body.GetWebhookByIDResponseBody] = dataclasses.field(default=None)
    
