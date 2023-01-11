import dataclasses
from typing import Any,Optional
from enum import Enum

class InjuriesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class InjuriesPathParams:
    format: InjuriesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = dataclasses.field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = dataclasses.field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InjuriesRequest:
    path_params: InjuriesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class InjuriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    injuries: Optional[list[Any]] = dataclasses.field(default=None)
    
