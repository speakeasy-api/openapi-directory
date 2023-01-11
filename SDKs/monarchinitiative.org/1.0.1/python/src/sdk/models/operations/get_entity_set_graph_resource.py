import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetEntitySetGraphResourceQueryParams:
    background: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'background', 'style': 'form', 'explode': True }})
    object_category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object_category', 'style': 'form', 'explode': True }})
    object_slim: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'object_slim', 'style': 'form', 'explode': True }})
    subject: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subject', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEntitySetGraphResourceRequest:
    query_params: GetEntitySetGraphResourceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEntitySetGraphResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
