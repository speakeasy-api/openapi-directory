import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import match_simple as shared_match_simple


@dataclasses.dataclass
class GetMatchSimplePathParams:
    match_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'match_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMatchSimpleHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMatchSimpleSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMatchSimpleRequest:
    headers: GetMatchSimpleHeaders = dataclasses.field()
    path_params: GetMatchSimplePathParams = dataclasses.field()
    security: GetMatchSimpleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMatchSimpleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    match_simple: Optional[shared_match_simple.MatchSimple] = dataclasses.field(default=None)
    
