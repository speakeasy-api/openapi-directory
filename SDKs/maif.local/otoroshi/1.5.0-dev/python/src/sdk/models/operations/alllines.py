import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class AllLinesSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class AllLinesRequest:
    security: AllLinesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AllLinesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    environment: Optional[str] = dataclasses.field(default=None)
    
