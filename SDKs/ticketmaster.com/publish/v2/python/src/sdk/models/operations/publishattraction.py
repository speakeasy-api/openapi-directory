import dataclasses
from typing import Optional
from ..shared import attraction as shared_attraction


@dataclasses.dataclass
class PublishAttractionHeaders:
    tmps_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PublishAttractionRequest:
    headers: PublishAttractionHeaders = dataclasses.field()
    request: shared_attraction.Attraction = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PublishAttractionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
