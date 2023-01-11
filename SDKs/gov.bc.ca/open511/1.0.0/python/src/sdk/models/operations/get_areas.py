import dataclasses
from typing import Optional
from enum import Enum

class GetAreasFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetAreasQueryParams:
    format: Optional[GetAreasFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAreasRequest:
    query_params: GetAreasQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAreasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
