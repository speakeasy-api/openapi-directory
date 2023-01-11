import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class DfsSlatesByDateFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class DfsSlatesByDatePathParams:
    date_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: DfsSlatesByDateFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DfsSlatesByDateRequest:
    path_params: DfsSlatesByDatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DfsSlatesByDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dfs_slates: Optional[list[Any]] = dataclasses.field(default=None)
    
