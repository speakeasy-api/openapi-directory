import dataclasses
from typing import Any,Optional
from enum import Enum

class ConferenceHierarchyWithTeamsFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class ConferenceHierarchyWithTeamsPathParams:
    format: ConferenceHierarchyWithTeamsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConferenceHierarchyWithTeamsRequest:
    path_params: ConferenceHierarchyWithTeamsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ConferenceHierarchyWithTeamsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conferences: Optional[list[Any]] = dataclasses.field(default=None)
    
