import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import provider as shared_provider
from ..shared import provider as shared_provider


@dataclasses.dataclass
class CircuitsProvidersPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CircuitsProvidersPartialUpdateRequest:
    path_params: CircuitsProvidersPartialUpdatePathParams = dataclasses.field()
    request: shared_provider.ProviderInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CircuitsProvidersPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    provider: Optional[shared_provider.Provider] = dataclasses.field(default=None)
    
