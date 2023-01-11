import dataclasses
from typing import Optional
from ..shared import provider as shared_provider


@dataclasses.dataclass
class CircuitsProvidersReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsProvidersReadRequest:
    path_params: CircuitsProvidersReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CircuitsProvidersReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    provider: Optional[shared_provider.Provider] = dataclasses.field(default=None)
    
