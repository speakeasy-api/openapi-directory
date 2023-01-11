import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class EnterpriseAdminUnsuspendUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminUnsuspendUserRequestBody:
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclasses.dataclass
class EnterpriseAdminUnsuspendUserRequest:
    path_params: EnterpriseAdminUnsuspendUserPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminUnsuspendUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminUnsuspendUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
