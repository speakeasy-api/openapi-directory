import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import order_enum as shared_order_enum


@dataclasses.dataclass
class GetConversationsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    date_end: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_end', 'style': 'form', 'explode': True }})
    date_start: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_start', 'style': 'form', 'explode': True }})
    order: Optional[shared_order_enum.OrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConversationsRequest:
    query_params: GetConversationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConversationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_conversations_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
