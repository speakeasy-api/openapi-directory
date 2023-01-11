import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import globalconfig as shared_globalconfig


@dataclasses.dataclass
class PutGlobalConfigSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PutGlobalConfigRequest:
    security: PutGlobalConfigSecurity = dataclasses.field()
    request: Optional[shared_globalconfig.GlobalConfig] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutGlobalConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    global_config: Optional[shared_globalconfig.GlobalConfig] = dataclasses.field(default=None)
    
