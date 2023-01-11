import dataclasses
from typing import Any,Optional
from ..shared import discoverableparticipant as shared_discoverableparticipant
from ..shared import discoveredparticipant as shared_discoveredparticipant


@dataclasses.dataclass
class DiscoveryReceivesRequest:
    request: shared_discoverableparticipant.DiscoverableParticipant = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DiscoveryReceivesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    discovered_participant: Optional[shared_discoveredparticipant.DiscoveredParticipant] = dataclasses.field(default=None)
    error_models: Optional[list[Any]] = dataclasses.field(default=None)
    
