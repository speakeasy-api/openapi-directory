import dataclasses
from typing import Optional
from ..shared import reinitializeactionconfiguration as shared_reinitializeactionconfiguration


@dataclasses.dataclass
class ReinitializePathParams:
    device_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReinitializeRequest:
    path_params: ReinitializePathParams = dataclasses.field()
    request: shared_reinitializeactionconfiguration.ReinitializeActionConfiguration = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReinitializeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
