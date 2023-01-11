import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import list_warehouses_response_body as shared_list_warehouses_response_body


@dataclasses.dataclass
class ListWarehousesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    list_warehouses_response_body: Optional[shared_list_warehouses_response_body.ListWarehousesResponseBody] = dataclasses.field(default=None)
    
