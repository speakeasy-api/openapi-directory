import dataclasses
from typing import Optional
from enum import Enum
from ..shared import eventrecord as shared_eventrecord

class GetEventsTypeEnum(str, Enum):
    ALL = "all"
    CLICKS = "clicks"
    CONTACTS = "contacts"


@dataclasses.dataclass
class GetEventsQueryParams:
    company: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'company', 'style': 'form', 'explode': True }})
    deal: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deal', 'style': 'form', 'explode': True }})
    nexttoken: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nexttoken', 'style': 'form', 'explode': True }})
    queryexecutionid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'queryexecutionid', 'style': 'form', 'explode': True }})
    site: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    type: Optional[GetEventsTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEventsRequest:
    query_params: GetEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event_records: Optional[list[shared_eventrecord.EventRecord]] = dataclasses.field(default=None)
    
