import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import reporttrips as shared_reporttrips


@dataclasses.dataclass
class GetReportsTripsQueryParams:
    from_: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    device_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    group_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReportsTripsRequest:
    query_params: GetReportsTripsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReportsTripsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    report_trips: Optional[list[shared_reporttrips.ReportTrips]] = dataclasses.field(default=None)
    
