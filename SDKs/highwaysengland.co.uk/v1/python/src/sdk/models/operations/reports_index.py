import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class ReportsIndexPathParams:
    report_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'report_type', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReportsIndexQueryParams:
    end_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    page: int = dataclasses.field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: int = dataclasses.field(metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    sites: str = dataclasses.field(metadata={'query_param': { 'field_name': 'sites', 'style': 'form', 'explode': True }})
    start_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    report_sub_type_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reportSubTypeId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReportsIndexRequest:
    path_params: ReportsIndexPathParams = dataclasses.field()
    query_params: ReportsIndexQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReportsIndexResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
