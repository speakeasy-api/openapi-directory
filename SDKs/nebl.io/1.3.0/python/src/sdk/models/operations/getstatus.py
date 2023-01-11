import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetStatusQueryParams:
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStatusRequest:
    query_params: GetStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_status_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
