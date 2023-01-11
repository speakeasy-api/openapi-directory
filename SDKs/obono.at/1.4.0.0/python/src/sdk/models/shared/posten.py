import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostenSatzEnum(str, Enum):
    NORMAL = "NORMAL"
    ERMAESSIGT1 = "ERMAESSIGT1"
    ERMAESSIGT2 = "ERMAESSIGT2"
    BESONDERS = "BESONDERS"
    NULL = "NULL"


@dataclass_json
@dataclasses.dataclass
class Posten:
    bezeichnung: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bezeichnung') }})
    brutto_betrag: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BruttoBetrag') }})
    menge: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Menge') }})
    netto_betrag: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NettoBetrag') }})
    satz: PostenSatzEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Satz') }})
    externer_beleg_belegkreis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Externer-Beleg-Belegkreis') }})
    externer_beleg_bezeichnung: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Externer-Beleg-Bezeichnung') }})
    externer_beleg_referenz: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Externer-Beleg-Referenz') }})
    
