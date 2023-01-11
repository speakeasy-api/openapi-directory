import dataclasses
from typing import Any,Optional
from enum import Enum

class DriverDetailsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class DriverDetailsPathParams:
    driverid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'driverid', 'style': 'simple', 'explode': False }})
    format: DriverDetailsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DriverDetailsRequest:
    path_params: DriverDetailsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DriverDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    driver: Optional[Any] = dataclasses.field(default=None)
    
