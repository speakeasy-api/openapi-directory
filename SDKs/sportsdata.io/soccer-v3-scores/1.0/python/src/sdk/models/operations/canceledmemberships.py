import dataclasses
from typing import Any,Optional
from enum import Enum

class CanceledMembershipsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class CanceledMembershipsPathParams:
    format: CanceledMembershipsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CanceledMembershipsRequest:
    path_params: CanceledMembershipsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CanceledMembershipsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    canceled_membership: Optional[Any] = dataclasses.field(default=None)
    
