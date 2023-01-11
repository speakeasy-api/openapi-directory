import dataclasses
from typing import Any,Optional
from enum import Enum

class MembershipsHistoricalFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class MembershipsHistoricalPathParams:
    format: MembershipsHistoricalFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MembershipsHistoricalRequest:
    path_params: MembershipsHistoricalPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MembershipsHistoricalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    memberships: Optional[list[Any]] = dataclasses.field(default=None)
    
