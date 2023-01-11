import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import getcallsresponse as shared_getcallsresponse

class GetCallsOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCallsStatusEnum(str, Enum):
    STARTED = "started"
    RINGING = "ringing"
    ANSWERED = "answered"
    MACHINE = "machine"
    COMPLETED = "completed"
    BUSY = "busy"
    CANCELLED = "cancelled"
    FAILED = "failed"
    REJECTED = "rejected"
    TIMEOUT = "timeout"
    UNANSWERED = "unanswered"


@dataclasses.dataclass
class GetCallsQueryParams:
    conversation_uuid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conversation_uuid', 'style': 'form', 'explode': True }})
    date_end: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_end', 'style': 'form', 'explode': True }})
    date_start: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_start', 'style': 'form', 'explode': True }})
    order: Optional[GetCallsOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    record_index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'record_index', 'style': 'form', 'explode': True }})
    status: Optional[GetCallsStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCallsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetCallsRequest:
    query_params: GetCallsQueryParams = dataclasses.field()
    security: GetCallsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCallsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_calls_response: Optional[shared_getcallsresponse.GetCallsResponse] = dataclasses.field(default=None)
    
