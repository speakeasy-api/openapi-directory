import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import deleted as shared_deleted


@dataclasses.dataclass
class DeleteAPIKeyFromGroupPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAPIKeyFromGroupSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteAPIKeyFromGroupRequest:
    path_params: DeleteAPIKeyFromGroupPathParams = dataclasses.field()
    security: DeleteAPIKeyFromGroupSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAPIKeyFromGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deleted: Optional[shared_deleted.Deleted] = dataclasses.field(default=None)
    
