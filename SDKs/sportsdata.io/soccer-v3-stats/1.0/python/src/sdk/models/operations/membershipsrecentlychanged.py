import dataclasses
from typing import Any,Optional
from enum import Enum

class MembershipsRecentlyChangedFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class MembershipsRecentlyChangedPathParams:
    days: str = dataclasses.field(metadata={'path_param': { 'field_name': 'days', 'style': 'simple', 'explode': False }})
    format: MembershipsRecentlyChangedFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MembershipsRecentlyChangedRequest:
    path_params: MembershipsRecentlyChangedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MembershipsRecentlyChangedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    memberships: Optional[list[Any]] = dataclasses.field(default=None)
    
