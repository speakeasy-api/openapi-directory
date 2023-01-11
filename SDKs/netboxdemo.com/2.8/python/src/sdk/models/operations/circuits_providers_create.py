import dataclasses
from typing import Optional
from ..shared import provider as shared_provider
from ..shared import provider as shared_provider


@dataclasses.dataclass
class CircuitsProvidersCreateRequest:
    request: shared_provider.ProviderInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CircuitsProvidersCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    provider: Optional[shared_provider.Provider] = dataclasses.field(default=None)
    
