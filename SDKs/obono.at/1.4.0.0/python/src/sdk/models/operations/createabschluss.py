import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import abschlussbelegdaten as shared_abschlussbelegdaten


@dataclasses.dataclass
class CreateAbschlussPathParams:
    registrierkasse_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAbschlussRequest:
    path_params: CreateAbschlussPathParams = dataclasses.field()
    request: shared_abschlussbelegdaten.Abschlussbelegdaten = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAbschlussResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    
