import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patch as shared_patch
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class PatchAPIKeyFromGroupPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchAPIKeyFromGroupSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PatchAPIKeyFromGroupRequest:
    path_params: PatchAPIKeyFromGroupPathParams = dataclasses.field()
    security: PatchAPIKeyFromGroupSecurity = dataclasses.field()
    request: Optional[list[shared_patch.Patch]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchAPIKeyFromGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key: Optional[shared_apikey.APIKey] = dataclasses.field(default=None)
    
