import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import belegdaten as shared_belegdaten


@dataclasses.dataclass
class AddBelegPathParams:
    beleg_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    registrierkasse_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddBelegRequest:
    path_params: AddBelegPathParams = dataclasses.field()
    request: shared_belegdaten.Belegdaten = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddBelegResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    
