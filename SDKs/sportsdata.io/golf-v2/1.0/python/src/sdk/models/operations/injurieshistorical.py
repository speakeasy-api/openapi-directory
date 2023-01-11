import dataclasses
from typing import Any,Optional
from enum import Enum

class InjuriesHistoricalFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class InjuriesHistoricalPathParams:
    format: InjuriesHistoricalFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InjuriesHistoricalRequest:
    path_params: InjuriesHistoricalPathParams = dataclasses.field()
    

@dataclasses.dataclass
class InjuriesHistoricalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    injuries: Optional[list[Any]] = dataclasses.field(default=None)
    
