import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patch as shared_patch
from ..shared import globalconfig as shared_globalconfig


@dataclasses.dataclass
class PatchGlobalConfigSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PatchGlobalConfigRequest:
    security: PatchGlobalConfigSecurity = dataclasses.field()
    request: Optional[list[shared_patch.Patch]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchGlobalConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    global_config: Optional[shared_globalconfig.GlobalConfig] = dataclasses.field(default=None)
    
