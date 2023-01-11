import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beleg as shared_beleg


@dataclass_json
@dataclasses.dataclass
class BelegeBelegeGruppe:
    belege_kompakt: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Belege-kompakt') }})
    signaturzertifikat: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Signaturzertifikat') }})
    zertifizierungsstellen: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zertifizierungsstellen') }})
    

@dataclass_json
@dataclasses.dataclass
class Belege:
    belege: Optional[list[shared_beleg.Beleg]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Belege') }})
    belege_gruppe: Optional[list[BelegeBelegeGruppe]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Belege-Gruppe') }})
    
