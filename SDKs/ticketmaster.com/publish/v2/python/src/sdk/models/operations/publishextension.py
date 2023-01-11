import dataclasses
from typing import Optional
from ..shared import extensiondata as shared_extensiondata


@dataclasses.dataclass
class PublishExtensionHeaders:
    tmps_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PublishExtensionRequest:
    headers: PublishExtensionHeaders = dataclasses.field()
    request: shared_extensiondata.ExtensionData = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PublishExtensionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
