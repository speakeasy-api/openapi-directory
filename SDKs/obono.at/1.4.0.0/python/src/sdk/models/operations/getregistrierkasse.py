import dataclasses
from typing import Optional
from ..shared import registrierkasse as shared_registrierkasse


@dataclasses.dataclass
class GetRegistrierkassePathParams:
    registrierkasse_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegistrierkasseRequest:
    path_params: GetRegistrierkassePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRegistrierkasseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    registrierkasse: Optional[shared_registrierkasse.Registrierkasse] = dataclasses.field(default=None)
    
