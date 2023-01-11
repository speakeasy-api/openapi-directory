import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import batchcorridorin as shared_batchcorridorin
from ..shared import batchcorridorout as shared_batchcorridorout


@dataclasses.dataclass
class CorridorBatchSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CorridorBatchRequest:
    security: CorridorBatchSecurity = dataclasses.field()
    request: Optional[shared_batchcorridorin.BatchCorridorIn] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CorridorBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_corridor_out: Optional[shared_batchcorridorout.BatchCorridorOut] = dataclasses.field(default=None)
    
