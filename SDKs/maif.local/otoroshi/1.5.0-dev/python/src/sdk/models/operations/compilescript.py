import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import script as shared_script
from ..shared import scriptcompilationresult as shared_scriptcompilationresult


@dataclasses.dataclass
class CompileScriptSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CompileScriptRequest:
    security: CompileScriptSecurity = dataclasses.field()
    request: Optional[shared_script.Script] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CompileScriptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    script_compilation_result: Optional[shared_scriptcompilationresult.ScriptCompilationResult] = dataclasses.field(default=None)
    
