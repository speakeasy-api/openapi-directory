import dataclasses
from typing import Optional


@dataclasses.dataclass
class ListHyponymsQueryParams:
    family: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    max_level: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxLevel', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListHyponymsRequest:
    query_params: ListHyponymsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListHyponymsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
