import dataclasses
from typing import Any,Optional
from enum import Enum

class VenuesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class VenuesPathParams:
    format: VenuesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VenuesRequest:
    path_params: VenuesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class VenuesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    venues: Optional[list[Any]] = dataclasses.field(default=None)
    
