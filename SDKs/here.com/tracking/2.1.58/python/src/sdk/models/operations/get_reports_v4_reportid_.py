import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetReportsV4ReportIDPathParams:
    report_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'reportId', 'style': 'simple', 'explode': False }})
    
class GetReportsV4ReportIDGroupByEnum(str, Enum):
    ASSET = "asset"
    GEOFENCE = "geofence"

class GetReportsV4ReportIDIntervalEnum(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"

class GetReportsV4ReportIDMeasureEnum(str, Enum):
    DURATION = "duration"
    OCCURRENCE = "occurrence"
    DAY = "day"
    ASSET = "asset"

class GetReportsV4ReportIDMethodEnum(str, Enum):
    AVERAGE = "average"
    CUMULATIVE = "cumulative"
    PERCENTAGE = "percentage"


@dataclasses.dataclass
class GetReportsV4ReportIDQueryParams:
    geofence_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'geofenceId', 'style': 'form', 'explode': True }})
    group_by: Optional[GetReportsV4ReportIDGroupByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupBy', 'style': 'form', 'explode': True }})
    interval: Optional[GetReportsV4ReportIDIntervalEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    measure: Optional[GetReportsV4ReportIDMeasureEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'measure', 'style': 'form', 'explode': True }})
    method: Optional[GetReportsV4ReportIDMethodEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'method', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'trackingId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReportsV4ReportIDHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReportsV4ReportIDSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetReportsV4ReportID200ApplicationJSONItemsTimestampValue:
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReportsV4ReportID200ApplicationJSONItemsTrackingIDValue:
    tracking_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReportsV4ReportID200ApplicationJSONItemsGeofenceIDValue:
    geofence_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geofenceId') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReportsV4ReportID200ApplicationJSONItemsEventPeriods:
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tracking_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class GetReportsV4ReportID200ApplicationJSONStatusEnum(str, Enum):
    PENDING = "pending"
    STARTED = "started"
    COMPLETED = "completed"
    FAILED = "failed"


@dataclass_json
@dataclasses.dataclass
class GetReportsV4ReportID200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    items: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    status: GetReportsV4ReportID200ApplicationJSONStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReportsV4ReportID400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReportsV4ReportID401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReportsV4ReportID403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetReportsV4ReportID404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetReportsV4ReportIDRequest:
    headers: GetReportsV4ReportIDHeaders = dataclasses.field()
    path_params: GetReportsV4ReportIDPathParams = dataclasses.field()
    query_params: GetReportsV4ReportIDQueryParams = dataclasses.field()
    security: GetReportsV4ReportIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetReportsV4ReportIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_reports_v4_report_id_200_application_json_object: Optional[GetReportsV4ReportID200ApplicationJSON] = dataclasses.field(default=None)
    get_reports_v4_report_id_400_application_json_object: Optional[GetReportsV4ReportID400ApplicationJSON] = dataclasses.field(default=None)
    get_reports_v4_report_id_401_application_json_object: Optional[GetReportsV4ReportID401ApplicationJSON] = dataclasses.field(default=None)
    get_reports_v4_report_id_403_application_json_object: Optional[GetReportsV4ReportID403ApplicationJSON] = dataclasses.field(default=None)
    get_reports_v4_report_id_404_application_json_object: Optional[GetReportsV4ReportID404ApplicationJSON] = dataclasses.field(default=None)
    
