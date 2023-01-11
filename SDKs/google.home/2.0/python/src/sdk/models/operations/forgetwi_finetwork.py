import dataclasses
from typing import Optional
from ..shared import forgetwi_finetworkrequest as shared_forgetwi_finetworkrequest


@dataclasses.dataclass
class ForgetWiFiNetworkRequest:
    request: shared_forgetwi_finetworkrequest.ForgetWiFiNetworkRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ForgetWiFiNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    forget_wi_fi_network_200_text_plain_object: Optional[str] = dataclasses.field(default=None)
    
