import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import order_enum as shared_order_enum


@dataclasses.dataclass
class GetEventsPathParams:
    conversation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    end_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_id', 'style': 'form', 'explode': True }})
    event_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'event_type', 'style': 'form', 'explode': True }})
    order: Optional[shared_order_enum.OrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    start_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEventsRequest:
    path_params: GetEventsPathParams = dataclasses.field()
    query_params: GetEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_events_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
