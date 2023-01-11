import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import reportstops as shared_reportstops


@dataclasses.dataclass
class GetReportsStopsQueryParams:
    from_: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    device_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    group_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReportsStopsRequest:
    query_params: GetReportsStopsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReportsStopsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    report_stops: Optional[list[shared_reportstops.ReportStops]] = dataclasses.field(default=None)
    
