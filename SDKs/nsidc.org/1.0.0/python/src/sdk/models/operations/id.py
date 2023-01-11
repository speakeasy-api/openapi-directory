import dataclasses
from typing import Optional
from enum import Enum

class IDSourceEnum(str, Enum):
    NSIDC = "NSIDC"
    ADE = "ADE"


@dataclasses.dataclass
class IDQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    source: IDSourceEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class IDRequest:
    query_params: IDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    id_200_application_x_suggestions_plus_json_string: Optional[str] = dataclasses.field(default=None)
    
