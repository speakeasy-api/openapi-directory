import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import script as shared_script


@dataclasses.dataclass
class FindScriptByIDPathParams:
    script_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scriptId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FindScriptByIDSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FindScriptByIDRequest:
    path_params: FindScriptByIDPathParams = dataclasses.field()
    security: FindScriptByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindScriptByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    script: Optional[shared_script.Script] = dataclasses.field(default=None)
    
