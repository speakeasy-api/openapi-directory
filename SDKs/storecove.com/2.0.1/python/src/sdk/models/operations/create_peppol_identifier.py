import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreatePeppolIdentifierPathParams:
    legal_entity_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePeppolIdentifierRequest:
    path_params: CreatePeppolIdentifierPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePeppolIdentifierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_models: Optional[list[Any]] = dataclasses.field(default=None)
    peppol_identifier: Optional[Any] = dataclasses.field(default=None)
    
