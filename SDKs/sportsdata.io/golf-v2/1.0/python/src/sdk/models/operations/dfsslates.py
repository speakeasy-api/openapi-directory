import dataclasses
from typing import Any,Optional
from enum import Enum

class DfsSlatesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclasses.dataclass
class DfsSlatesPathParams:
    format: DfsSlatesFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    tournamentid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tournamentid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DfsSlatesRequest:
    path_params: DfsSlatesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DfsSlatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dfs_slates: Optional[list[Any]] = dataclasses.field(default=None)
    
