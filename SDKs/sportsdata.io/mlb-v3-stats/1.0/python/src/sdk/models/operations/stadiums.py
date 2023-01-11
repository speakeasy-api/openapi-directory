import dataclasses
from typing import Any,Optional
from enum import Enum

class StadiumsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class StadiumsPathParams:
    format: StadiumsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StadiumsRequest:
    path_params: StadiumsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StadiumsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    stadiums: Optional[list[Any]] = dataclasses.field(default=None)
    
