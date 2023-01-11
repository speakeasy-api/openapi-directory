import dataclasses
from typing import Optional
from ..shared import server as shared_server


@dataclasses.dataclass
class PutServerRequest:
    request: shared_server.Server = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutServerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    server: Optional[shared_server.Server] = dataclasses.field(default=None)
    
