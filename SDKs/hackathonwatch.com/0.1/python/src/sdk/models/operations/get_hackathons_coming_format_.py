import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetHackathonsComingFormatQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetHackathonsComingFormatRequest:
    query_params: GetHackathonsComingFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetHackathonsComingFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
