import dataclasses
from typing import Any,Optional
from enum import Enum

class MembershipsActiveFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class MembershipsActivePathParams:
    format: MembershipsActiveFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MembershipsActiveRequest:
    path_params: MembershipsActivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class MembershipsActiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    memberships: Optional[list[Any]] = dataclasses.field(default=None)
    
