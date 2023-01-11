import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetTokenQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    service: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTokenRequest:
    query_params: GetTokenQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
