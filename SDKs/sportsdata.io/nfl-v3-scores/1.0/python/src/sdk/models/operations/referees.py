import dataclasses
from typing import Any,Optional
from enum import Enum

class RefereesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class RefereesPathParams:
    format: RefereesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RefereesRequest:
    path_params: RefereesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RefereesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    referees: Optional[list[Any]] = dataclasses.field(default=None)
    
