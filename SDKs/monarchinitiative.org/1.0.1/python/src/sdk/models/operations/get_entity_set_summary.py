import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetEntitySetSummaryQueryParams:
    background: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'background', 'style': 'form', 'explode': True }})
    object_category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object_category', 'style': 'form', 'explode': True }})
    object_slim: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object_slim', 'style': 'form', 'explode': True }})
    subject: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEntitySetSummaryRequest:
    query_params: GetEntitySetSummaryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEntitySetSummaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
