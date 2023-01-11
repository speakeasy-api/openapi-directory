import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetGenrePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetGenreIncludeLicensedContentEnum(str, Enum):
    YES = "yes"
    NO = " no"


@dataclasses.dataclass
class GetGenreQueryParams:
    include_licensed_content: Optional[GetGenreIncludeLicensedContentEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeLicensedContent', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGenreRequest:
    path_params: GetGenrePathParams = dataclasses.field()
    query_params: GetGenreQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGenreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
