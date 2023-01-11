import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetQueryQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    count: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    in_url_prefixes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'inUrlPrefixes', 'style': 'form', 'explode': True }})
    start: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    subdomains: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subdomains', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQueryRequest:
    query_params: GetQueryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetQueryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
