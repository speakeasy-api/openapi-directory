import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import group as shared_group
from ..shared import snowmonkeyconfig as shared_snowmonkeyconfig


@dataclasses.dataclass
class PatchSnowMonkeySecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PatchSnowMonkeyRequest:
    security: PatchSnowMonkeySecurity = dataclasses.field()
    request: Optional[shared_group.Group] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchSnowMonkeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    snow_monkey_config: Optional[shared_snowmonkeyconfig.SnowMonkeyConfig] = dataclasses.field(default=None)
    
