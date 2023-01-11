import dataclasses
from typing import Optional
from enum import Enum

class GetTimestagsFilterEnum(str, Enum):
    DES = "Des"
    GEO = "Geo"
    ORG = "Org"
    PER = "Per"


@dataclasses.dataclass
class GetTimestagsQueryParams:
    query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    filter: Optional[GetTimestagsFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTimestagsRequest:
    query_params: GetTimestagsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTimestagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_timestags_200_application_json_arrays: Optional[list[list[str]]] = dataclasses.field(default=None)
    
