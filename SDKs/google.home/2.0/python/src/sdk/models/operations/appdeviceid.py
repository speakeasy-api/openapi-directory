import dataclasses
from typing import Optional
from ..shared import appdeviceidrequest as shared_appdeviceidrequest
from ..shared import example11 as shared_example11


@dataclasses.dataclass
class AppDeviceIDRequest:
    request: shared_appdeviceidrequest.AppDeviceIDRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AppDeviceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example11: Optional[shared_example11.Example11] = dataclasses.field(default=None)
    
