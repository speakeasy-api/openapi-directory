import dataclasses
from typing import Optional
from ..shared import beleg as shared_beleg


@dataclasses.dataclass
class GetBelegeBelegUUIDPathParams:
    beleg_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBelegeBelegUUIDRequest:
    path_params: GetBelegeBelegUUIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBelegeBelegUUIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beleg: Optional[shared_beleg.Beleg] = dataclasses.field(default=None)
    
