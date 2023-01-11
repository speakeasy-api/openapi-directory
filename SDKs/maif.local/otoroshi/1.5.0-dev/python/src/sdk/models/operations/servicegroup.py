import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import group as shared_group


@dataclasses.dataclass
class ServiceGroupPathParams:
    service_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceGroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServiceGroupSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ServiceGroupRequest:
    path_params: ServiceGroupPathParams = dataclasses.field()
    security: ServiceGroupSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ServiceGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group: Optional[shared_group.Group] = dataclasses.field(default=None)
    
