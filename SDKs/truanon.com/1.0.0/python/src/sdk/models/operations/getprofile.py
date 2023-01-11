import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetProfileQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    service: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProfileRequest:
    query_params: GetProfileQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
