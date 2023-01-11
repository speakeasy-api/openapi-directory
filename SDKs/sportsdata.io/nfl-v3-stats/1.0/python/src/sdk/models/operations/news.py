import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class NewsPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NewsRequest:
    path_params: NewsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NewsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    news: Optional[list[Any]] = dataclasses.field(default=None)
    
