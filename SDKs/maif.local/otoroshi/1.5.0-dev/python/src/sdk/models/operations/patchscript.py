import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patch as shared_patch
from ..shared import script as shared_script


@dataclasses.dataclass
class PatchScriptPathParams:
    script_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scriptId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchScriptSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PatchScriptRequest:
    path_params: PatchScriptPathParams = dataclasses.field()
    security: PatchScriptSecurity = dataclasses.field()
    request: Optional[list[shared_patch.Patch]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchScriptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    script: Optional[shared_script.Script] = dataclasses.field(default=None)
    
