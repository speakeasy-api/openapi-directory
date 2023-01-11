import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetVersionsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetVersionsRequest:
    security: GetVersionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetVersionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
