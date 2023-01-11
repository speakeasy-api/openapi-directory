import dataclasses
from typing import Optional
from ..shared import enrichmentrequest as shared_enrichmentrequest


@dataclasses.dataclass
class GetEnrichmentDataUsingPost1Request:
    request: shared_enrichmentrequest.EnrichmentRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetEnrichmentDataUsingPost1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
