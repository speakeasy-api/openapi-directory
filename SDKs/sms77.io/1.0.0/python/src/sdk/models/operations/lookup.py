import dataclasses
from typing import Optional


@dataclasses.dataclass
class LookupQueryParams:
    number: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': False }})
    type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    json: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'json', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LookupRequest:
    query_params: LookupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LookupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
