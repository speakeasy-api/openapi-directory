import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostAnnotateQueryParams:
    content: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'content', 'style': 'form', 'explode': True }})
    exclude_category: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_category', 'style': 'form', 'explode': True }})
    include_abbreviation: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_abbreviation', 'style': 'form', 'explode': True }})
    include_acronym: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_acronym', 'style': 'form', 'explode': True }})
    include_category: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_category', 'style': 'form', 'explode': True }})
    include_numbers: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_numbers', 'style': 'form', 'explode': True }})
    longest_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'longest_only', 'style': 'form', 'explode': True }})
    min_length: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'min_length', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostAnnotateRequest:
    query_params: PostAnnotateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostAnnotateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
