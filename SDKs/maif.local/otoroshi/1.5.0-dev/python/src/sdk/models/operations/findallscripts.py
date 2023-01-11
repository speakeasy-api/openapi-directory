import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import script as shared_script


@dataclasses.dataclass
class FindAllScriptsSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FindAllScriptsRequest:
    security: FindAllScriptsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindAllScriptsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scripts: Optional[list[shared_script.Script]] = dataclasses.field(default=None)
    
