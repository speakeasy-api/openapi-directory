import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import list_shipment_errors_response_body as shared_list_shipment_errors_response_body


@dataclasses.dataclass
class ListShipmentErrorsPathParams:
    shipment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipment_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListShipmentErrorsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListShipmentErrorsRequest:
    path_params: ListShipmentErrorsPathParams = dataclasses.field()
    query_params: ListShipmentErrorsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListShipmentErrorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    list_shipment_errors_response_body: Optional[shared_list_shipment_errors_response_body.ListShipmentErrorsResponseBody] = dataclasses.field(default=None)
    
