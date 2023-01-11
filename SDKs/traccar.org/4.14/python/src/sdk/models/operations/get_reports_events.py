import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import event as shared_event


@dataclasses.dataclass
class GetReportsEventsQueryParams:
    from_: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    to: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    device_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    group_id: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    type: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetReportsEventsRequest:
    query_params: GetReportsEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReportsEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None)
    
