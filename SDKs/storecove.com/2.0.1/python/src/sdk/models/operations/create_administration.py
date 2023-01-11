import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateAdministrationPathParams:
    legal_entity_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAdministrationRequest:
    path_params: CreateAdministrationPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAdministrationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    administration: Optional[Any] = dataclasses.field(default=None)
    error_models: Optional[list[Any]] = dataclasses.field(default=None)
    
