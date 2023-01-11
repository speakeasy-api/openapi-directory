import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAddWordQueryParams:
    author: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    definition: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'definition', 'style': 'form', 'explode': True }})
    related: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'related', 'style': 'form', 'explode': True }})
    word: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'word', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAddWordRequest:
    query_params: GetAddWordQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAddWordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
