import dataclasses
from typing import Any,Optional
from enum import Enum

class SpellsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class SpellsPathParams:
    format: SpellsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SpellsRequest:
    path_params: SpellsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SpellsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    spells: Optional[list[Any]] = dataclasses.field(default=None)
    
