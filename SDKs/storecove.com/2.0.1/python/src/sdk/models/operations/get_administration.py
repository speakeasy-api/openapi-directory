import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetAdministrationPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    legal_entity_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAdministrationRequest:
    path_params: GetAdministrationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAdministrationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    administration: Optional[Any] = dataclasses.field(default=None)
    
