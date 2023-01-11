import dataclasses
from typing import Any,Optional
from enum import Enum

class ItemsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class ItemsPathParams:
    format: ItemsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ItemsRequest:
    path_params: ItemsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    items: Optional[list[Any]] = dataclasses.field(default=None)
    
