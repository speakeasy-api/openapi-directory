import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class DeleteWarehousePathParams:
    warehouse_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'warehouse_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWarehouseRequest:
    path_params: DeleteWarehousePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWarehouseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response_body: Optional[str] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
