import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import apikey as shared_apikey


@dataclasses.dataclass
class APIKeyFromGroupPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class APIKeyFromGroupSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class APIKeyFromGroupRequest:
    path_params: APIKeyFromGroupPathParams = dataclasses.field()
    security: APIKeyFromGroupSecurity = dataclasses.field()
    

@dataclasses.dataclass
class APIKeyFromGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key: Optional[shared_apikey.APIKey] = dataclasses.field(default=None)
    
