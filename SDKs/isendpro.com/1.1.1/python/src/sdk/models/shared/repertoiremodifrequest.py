import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RepertoirEmodifrequestRepertoireEditEnum(str, Enum):
    ADD = "add"
    DEL = "del"


@dataclass_json
@dataclasses.dataclass
class RepertoirEmodifrequest:
    keyid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyid') }})
    num: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('num') }})
    repertoire_edit: RepertoirEmodifrequestRepertoireEditEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repertoireEdit') }})
    repertoire_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repertoireId') }})
    champ1: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ1') }})
    champ10: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ10') }})
    champ11: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ11') }})
    champ12: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ12') }})
    champ13: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ13') }})
    champ14: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ14') }})
    champ15: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ15') }})
    champ16: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ16') }})
    champ17: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ17') }})
    champ18: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ18') }})
    champ19: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ19') }})
    champ2: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ2') }})
    champ20: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ20') }})
    champ21: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ21') }})
    champ22: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ22') }})
    champ23: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ23') }})
    champ24: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ24') }})
    champ25: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ25') }})
    champ26: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ26') }})
    champ27: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ27') }})
    champ3: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ3') }})
    champ4: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ4') }})
    champ5: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ5') }})
    champ6: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ6') }})
    champ7: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ7') }})
    champ8: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ8') }})
    champ9: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('champ9') }})
    
