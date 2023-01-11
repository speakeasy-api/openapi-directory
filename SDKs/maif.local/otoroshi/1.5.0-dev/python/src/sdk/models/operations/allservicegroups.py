import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import group as shared_group


@dataclasses.dataclass
class AllServiceGroupsSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class AllServiceGroupsRequest:
    security: AllServiceGroupsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AllServiceGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    groups: Optional[list[shared_group.Group]] = dataclasses.field(default=None)
    
