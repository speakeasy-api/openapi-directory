import dataclasses
from typing import Optional
from ..shared import event as shared_event


@dataclasses.dataclass
class PublishEventHeaders:
    tmps_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PublishEventRequest:
    headers: PublishEventHeaders = dataclasses.field()
    request: shared_event.Event = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PublishEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
