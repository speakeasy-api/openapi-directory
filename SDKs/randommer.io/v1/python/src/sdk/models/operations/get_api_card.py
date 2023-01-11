import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAPICardQueryParams:
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAPICardHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPICardRequest:
    headers: GetAPICardHeaders = dataclasses.field()
    query_params: GetAPICardQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPICardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
