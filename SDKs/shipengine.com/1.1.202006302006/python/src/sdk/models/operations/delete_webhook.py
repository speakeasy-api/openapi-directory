import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class DeleteWebhookPathParams:
    webhook_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webhook_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWebhookRequest:
    path_params: DeleteWebhookPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response_body: Optional[str] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
