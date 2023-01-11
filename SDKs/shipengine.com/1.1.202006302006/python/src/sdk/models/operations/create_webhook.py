import dataclasses
from typing import Optional
from ..shared import create_webhook_request_body as shared_create_webhook_request_body
from ..shared import create_webhook_response_body as shared_create_webhook_response_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class CreateWebhookRequest:
    request: shared_create_webhook_request_body.CreateWebhookRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_webhook_response_body: Optional[shared_create_webhook_response_body.CreateWebhookResponseBody] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
