import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import snowmonkeyconfig as shared_snowmonkeyconfig


@dataclasses.dataclass
class GetSnowMonkeyConfigSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetSnowMonkeyConfigRequest:
    security: GetSnowMonkeyConfigSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSnowMonkeyConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    snow_monkey_config: Optional[shared_snowmonkeyconfig.SnowMonkeyConfig] = dataclasses.field(default=None)
    
