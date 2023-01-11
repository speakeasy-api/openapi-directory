import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import list_manifests_response_body as shared_list_manifests_response_body


@dataclasses.dataclass
class ListManifestsQueryParams:
    carrier_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'carrier_id', 'style': 'form', 'explode': True }})
    created_at_end: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_at_end', 'style': 'form', 'explode': True }})
    created_at_start: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_at_start', 'style': 'form', 'explode': True }})
    label_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label_ids', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    ship_date_end: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ship_date_end', 'style': 'form', 'explode': True }})
    ship_date_start: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ship_date_start', 'style': 'form', 'explode': True }})
    warehouse_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'warehouse_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListManifestsRequest:
    query_params: ListManifestsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListManifestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    list_manifests_response_body: Optional[shared_list_manifests_response_body.ListManifestsResponseBody] = dataclasses.field(default=None)
    
