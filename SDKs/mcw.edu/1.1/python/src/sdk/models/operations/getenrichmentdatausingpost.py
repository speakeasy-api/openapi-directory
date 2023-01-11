import dataclasses
from typing import Optional
from ..shared import enrichmentgenerequest as shared_enrichmentgenerequest


@dataclasses.dataclass
class GetEnrichmentDataUsingPostRequest:
    request: shared_enrichmentgenerequest.EnrichmentGeneRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetEnrichmentDataUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
