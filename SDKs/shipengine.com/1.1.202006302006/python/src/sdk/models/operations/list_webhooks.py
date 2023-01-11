import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import webhook as shared_webhook


@dataclasses.dataclass
class ListWebhooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    list_webhooks_response_body: Optional[list[shared_webhook.Webhook]] = dataclasses.field(default=None)
    
