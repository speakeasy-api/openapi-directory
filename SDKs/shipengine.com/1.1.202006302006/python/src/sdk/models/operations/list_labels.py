import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import label_status_enum as shared_label_status_enum
from ..shared import error_response_body as shared_error_response_body

class ListLabelsSortByEnum(str, Enum):
    MODIFIED_AT = "modified_at"
    CREATED_AT = "created_at"


@dataclasses.dataclass
class ListLabelsQueryParams:
    batch_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'batch_id', 'style': 'form', 'explode': True }})
    carrier_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'carrier_id', 'style': 'form', 'explode': True }})
    created_at_end: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_at_end', 'style': 'form', 'explode': True }})
    created_at_start: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_at_start', 'style': 'form', 'explode': True }})
    label_status: Optional[shared_label_status_enum.LabelStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label_status', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    rate_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rate_id', 'style': 'form', 'explode': True }})
    service_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'service_code', 'style': 'form', 'explode': True }})
    shipment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'shipment_id', 'style': 'form', 'explode': True }})
    sort_by: Optional[ListLabelsSortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sort_dir: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_dir', 'style': 'form', 'explode': True }})
    tracking_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tracking_number', 'style': 'form', 'explode': True }})
    warehouse_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'warehouse_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListLabelsRequest:
    query_params: ListLabelsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListLabelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    list_labels_response_body: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
