import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import get_warehouse_by_id_response_body as shared_get_warehouse_by_id_response_body


@dataclasses.dataclass
class GetWarehouseByIDPathParams:
    warehouse_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'warehouse_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWarehouseByIDRequest:
    path_params: GetWarehouseByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWarehouseByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_warehouse_by_id_response_body: Optional[shared_get_warehouse_by_id_response_body.GetWarehouseByIDResponseBody] = dataclasses.field(default=None)
    
