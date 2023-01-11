import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import get_carriers_response_body as shared_get_carriers_response_body


@dataclasses.dataclass
class ListCarriersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_carriers_response_body: Optional[shared_get_carriers_response_body.GetCarriersResponseBody] = dataclasses.field(default=None)
    
