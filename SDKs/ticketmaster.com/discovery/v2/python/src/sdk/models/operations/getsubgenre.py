import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetSubgenrePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetSubgenreIncludeLicensedContentEnum(str, Enum):
    YES = "yes"
    NO = " no"


@dataclasses.dataclass
class GetSubgenreQueryParams:
    include_licensed_content: Optional[GetSubgenreIncludeLicensedContentEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeLicensedContent', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSubgenreRequest:
    path_params: GetSubgenrePathParams = dataclasses.field()
    query_params: GetSubgenreQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubgenreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
