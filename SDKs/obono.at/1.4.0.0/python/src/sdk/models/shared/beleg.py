import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import signiertebelegdaten as shared_signiertebelegdaten

class BelegBelegTypenEnum(str, Enum):
    BELEGKREISINITIALISIERUNG = "Belegkreisinitialisierung"
    KASSENBERICHT = "Kassenbericht"
    MONATSABSCHLUSS = "Monatsabschluss"
    STARTBELEG = "Startbeleg"
    STORNO = "Storno"
    SYSTEMBELEG = "Systembeleg"
    TRAINING = "Training"


@dataclass_json
@dataclasses.dataclass
class Beleg:
    beleg_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beleg-Codes') }})
    beleg_typen: Optional[list[BelegBelegTypenEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beleg-Typen') }})
    belegdaten: Optional[shared_signiertebelegdaten.SignierteBelegdaten] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Belegdaten') }})
    jws: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JWS') }})
    qr: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QR') }})
    qr_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QR-Link') }})
    registrierkasse_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Registrierkasse-UUID') }})
    signaturerstellungseinheit_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Signaturerstellungseinheit-UUID') }})
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_href') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_uuid') }})
    
