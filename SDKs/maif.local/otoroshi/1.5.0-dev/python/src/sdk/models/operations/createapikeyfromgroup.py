import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class CreateAPIKeyFromGroupPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAPIKeyFromGroupSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateAPIKeyFromGroupRequest:
    path_params: CreateAPIKeyFromGroupPathParams = dataclasses.field()
    security: CreateAPIKeyFromGroupSecurity = dataclasses.field()
    request: Optional[shared_apikey.APIKey] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAPIKeyFromGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key: Optional[shared_apikey.APIKey] = dataclasses.field(default=None)
    
