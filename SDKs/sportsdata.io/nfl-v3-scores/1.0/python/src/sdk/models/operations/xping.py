import dataclasses
from typing import Any,Optional
from enum import Enum

class XPingFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class XPingPathParams:
    format: XPingFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    seconds: str = dataclasses.field(metadata={'path_param': { 'field_name': 'seconds', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class XPingRequest:
    path_params: XPingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class XPingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    x_ping_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
