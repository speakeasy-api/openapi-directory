import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import outage as shared_outage


@dataclasses.dataclass
class GetSnowMonkeyOutagesSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetSnowMonkeyOutagesRequest:
    security: GetSnowMonkeyOutagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetSnowMonkeyOutagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    outages: Optional[list[shared_outage.Outage]] = dataclasses.field(default=None)
    
