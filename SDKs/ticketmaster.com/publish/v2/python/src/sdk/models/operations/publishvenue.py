import dataclasses
from typing import Optional
from ..shared import venue as shared_venue


@dataclasses.dataclass
class PublishVenueHeaders:
    tmps_correlation_id: str = dataclasses.field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PublishVenueRequest:
    headers: PublishVenueHeaders = dataclasses.field()
    request: shared_venue.Venue = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PublishVenueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
