import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class UpdateBatchPathParams:
    batch_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batch_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateBatchRequest:
    path_params: UpdateBatchPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UpdateBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response_body: Optional[str] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
