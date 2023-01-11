import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class HeadAtmsHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class HeadAtmsRequest:
    headers: HeadAtmsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class HeadAtmsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    no_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
