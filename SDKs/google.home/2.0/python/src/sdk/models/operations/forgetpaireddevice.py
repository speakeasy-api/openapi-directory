import dataclasses
from typing import Optional
from ..shared import forgetpaireddevicerequest as shared_forgetpaireddevicerequest


@dataclasses.dataclass
class ForgetpaireddeviceRequest:
    request: shared_forgetpaireddevicerequest.ForgetpaireddeviceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ForgetpaireddeviceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    forgetpaireddevice_200_text_plain_object: Optional[str] = dataclasses.field(default=None)
    
