import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import done as shared_done


@dataclasses.dataclass
class StopSnowMonkeySecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class StopSnowMonkeyRequest:
    security: StopSnowMonkeySecurity = dataclasses.field()
    

@dataclasses.dataclass
class StopSnowMonkeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    done: Optional[shared_done.Done] = dataclasses.field(default=None)
    
