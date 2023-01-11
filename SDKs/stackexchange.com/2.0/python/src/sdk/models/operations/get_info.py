import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetInfoQueryParams:
    site: str = dataclasses.field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInfoRequest:
    query_params: GetInfoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
