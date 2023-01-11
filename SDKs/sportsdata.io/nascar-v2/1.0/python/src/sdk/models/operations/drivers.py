import dataclasses
from typing import Any,Optional
from enum import Enum

class DriversFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class DriversPathParams:
    format: DriversFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DriversRequest:
    path_params: DriversPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DriversResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    drivers: Optional[list[Any]] = dataclasses.field(default=None)
    
