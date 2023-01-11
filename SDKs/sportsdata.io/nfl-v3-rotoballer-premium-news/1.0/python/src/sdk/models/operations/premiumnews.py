import dataclasses
from typing import Any,Optional
from enum import Enum

class PremiumNewsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclasses.dataclass
class PremiumNewsPathParams:
    format: PremiumNewsFormatEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PremiumNewsRequest:
    path_params: PremiumNewsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PremiumNewsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    news: Optional[list[Any]] = dataclasses.field(default=None)
    
