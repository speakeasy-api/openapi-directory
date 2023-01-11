import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class HeadBranchesHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class HeadBranchesRequest:
    headers: HeadBranchesHeaders = dataclasses.field()
    

@dataclasses.dataclass
class HeadBranchesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    no_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
