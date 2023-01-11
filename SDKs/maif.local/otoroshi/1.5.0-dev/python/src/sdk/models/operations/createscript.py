import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import script as shared_script


@dataclasses.dataclass
class CreateScriptSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateScriptRequest:
    security: CreateScriptSecurity = dataclasses.field()
    request: Optional[shared_script.Script] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateScriptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    script: Optional[shared_script.Script] = dataclasses.field(default=None)
    
