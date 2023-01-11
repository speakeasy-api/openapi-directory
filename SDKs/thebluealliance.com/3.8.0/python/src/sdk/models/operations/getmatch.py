import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import match as shared_match


@dataclasses.dataclass
class GetMatchPathParams:
    match_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'match_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMatchHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMatchRequest:
    headers: GetMatchHeaders = dataclasses.field()
    path_params: GetMatchPathParams = dataclasses.field()
    security: GetMatchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMatchResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    match: Optional[shared_match.Match] = dataclasses.field(default=None)
    
