import dataclasses
from typing import Any,Optional
from enum import Enum

class AreasCountriesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class AreasCountriesPathParams:
    format: AreasCountriesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AreasCountriesRequest:
    path_params: AreasCountriesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class AreasCountriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    areas: Optional[list[Any]] = dataclasses.field(default=None)
    
