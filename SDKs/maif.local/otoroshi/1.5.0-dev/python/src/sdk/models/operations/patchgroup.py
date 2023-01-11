import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patch as shared_patch
from ..shared import group as shared_group


@dataclasses.dataclass
class PatchGroupPathParams:
    service_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceGroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchGroupSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PatchGroupRequest:
    path_params: PatchGroupPathParams = dataclasses.field()
    security: PatchGroupSecurity = dataclasses.field()
    request: Optional[list[shared_patch.Patch]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group: Optional[shared_group.Group] = dataclasses.field(default=None)
    
