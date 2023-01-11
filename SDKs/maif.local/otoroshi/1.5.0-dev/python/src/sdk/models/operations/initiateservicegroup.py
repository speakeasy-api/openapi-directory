import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import group as shared_group


@dataclasses.dataclass
class InitiateServiceGroupSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class InitiateServiceGroupRequest:
    security: InitiateServiceGroupSecurity = dataclasses.field()
    

@dataclasses.dataclass
class InitiateServiceGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group: Optional[shared_group.Group] = dataclasses.field(default=None)
    
