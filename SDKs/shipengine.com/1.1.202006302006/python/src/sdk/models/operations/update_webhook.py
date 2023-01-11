import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import update_webhook_request_body as shared_update_webhook_request_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class UpdateWebhookPathParams:
    webhook_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'webhook_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateWebhookRequest:
    path_params: UpdateWebhookPathParams = dataclasses.field()
    request: shared_update_webhook_request_body.UpdateWebhookRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response_body: Optional[str] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
