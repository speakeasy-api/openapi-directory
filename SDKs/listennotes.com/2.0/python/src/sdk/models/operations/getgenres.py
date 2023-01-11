import dataclasses
from typing import Optional
from ..shared import getgenresresponse as shared_getgenresresponse


@dataclasses.dataclass
class GetGenresQueryParams:
    top_level_only: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'top_level_only', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGenresHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGenresRequest:
    headers: GetGenresHeaders = dataclasses.field()
    query_params: GetGenresQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGenresResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_genres_response: Optional[shared_getgenresresponse.GetGenresResponse] = dataclasses.field(default=None)
    
