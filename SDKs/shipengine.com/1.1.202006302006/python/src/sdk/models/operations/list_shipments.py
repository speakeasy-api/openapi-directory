import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import shipment_status_enum as shared_shipment_status_enum
from ..shared import shipments_sort_by_enum as shared_shipments_sort_by_enum
from ..shared import error_response_body as shared_error_response_body
from ..shared import list_shipments_response_body as shared_list_shipments_response_body


@dataclasses.dataclass
class ListShipmentsQueryParams:
    batch_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'batch_id', 'style': 'form', 'explode': True }})
    created_at_end: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_at_end', 'style': 'form', 'explode': True }})
    created_at_start: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_at_start', 'style': 'form', 'explode': True }})
    modified_at_end: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modified_at_end', 'style': 'form', 'explode': True }})
    modified_at_start: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modified_at_start', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    sales_order_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sales_order_id', 'style': 'form', 'explode': True }})
    shipment_status: Optional[shared_shipment_status_enum.ShipmentStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'shipment_status', 'style': 'form', 'explode': True }})
    sort_by: Optional[shared_shipments_sort_by_enum.ShipmentsSortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sort_dir: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_dir', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListShipmentsRequest:
    query_params: ListShipmentsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListShipmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    list_shipments_response_body: Optional[shared_list_shipments_response_body.ListShipmentsResponseBody] = dataclasses.field(default=None)
    
