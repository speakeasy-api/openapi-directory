import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetModelPropertiesQueryParams:
    contributor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor', 'style': 'form', 'explode': True }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModelPropertiesRequest:
    query_params: GetModelPropertiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModelPropertiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
