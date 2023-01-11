import dataclasses
from typing import Optional
from enum import Enum

class GetQueryExtensionExtensionEnum(str, Enum):
    ATOM = "atom"
    RSS = "rss"
    HTML = "html"
    JSON = "json"


@dataclasses.dataclass
class GetQueryExtensionPathParams:
    extension: GetQueryExtensionExtensionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'extension', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetQueryExtensionQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    count: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    in_url_prefixes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'inUrlPrefixes', 'style': 'form', 'explode': True }})
    start: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    subdomains: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subdomains', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQueryExtensionRequest:
    path_params: GetQueryExtensionPathParams = dataclasses.field()
    query_params: GetQueryExtensionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetQueryExtensionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
