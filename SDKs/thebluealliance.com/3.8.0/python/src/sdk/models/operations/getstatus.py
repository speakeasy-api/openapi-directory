import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_status as shared_api_status


@dataclasses.dataclass
class GetStatusHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStatusSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetStatusRequest:
    headers: GetStatusHeaders = dataclasses.field()
    security: GetStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetStatusResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    api_status: Optional[shared_api_status.APIStatus] = dataclasses.field(default=None)
    
