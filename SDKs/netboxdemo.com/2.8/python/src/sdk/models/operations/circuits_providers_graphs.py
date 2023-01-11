import dataclasses
from typing import Optional
from ..shared import provider as shared_provider


@dataclasses.dataclass
class CircuitsProvidersGraphsPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsProvidersGraphsRequest:
    path_params: CircuitsProvidersGraphsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CircuitsProvidersGraphsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    provider: Optional[shared_provider.Provider] = dataclasses.field(default=None)
    
