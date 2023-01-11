import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ListReportsQueryParams:
    account_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'account_id', 'style': 'form', 'explode': True }})
    status: str = dataclasses.field(metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    date_from: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListReportsSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListReports200ApplicationJSON:
    items_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items_count') }})
    reports: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reports') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self_link') }})
    

@dataclasses.dataclass
class ListReportsRequest:
    query_params: ListReportsQueryParams = dataclasses.field()
    security: ListReportsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListReportsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_reports_200_application_json_object: Optional[ListReports200ApplicationJSON] = dataclasses.field(default=None)
    list_reports_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    list_reports_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
