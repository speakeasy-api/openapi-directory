import dataclasses
from typing import Optional
from ..shared import create_warehouse_request_body as shared_create_warehouse_request_body
from ..shared import create_warehouse_response_body as shared_create_warehouse_response_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class CreateWarehouseRequest:
    request: shared_create_warehouse_request_body.CreateWarehouseRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateWarehouseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_warehouse_response_body: Optional[shared_create_warehouse_response_body.CreateWarehouseResponseBody] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
