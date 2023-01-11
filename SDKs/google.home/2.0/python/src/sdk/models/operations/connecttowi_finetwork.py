import dataclasses
from ..shared import connecttowi_finetworkrequest as shared_connecttowi_finetworkrequest


@dataclasses.dataclass
class ConnecttoWiFiNetworkRequest:
    request: shared_connecttowi_finetworkrequest.ConnecttoWiFiNetworkRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ConnecttoWiFiNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
