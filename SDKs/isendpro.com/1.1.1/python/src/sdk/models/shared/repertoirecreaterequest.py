import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RepertoirEcreaterequestRepertoireEditEnum(str, Enum):
    CREATE = "create"


@dataclass_json
@dataclasses.dataclass
class RepertoirEcreaterequest:
    keyid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyid') }})
    repertoire_edit: RepertoirEcreaterequestRepertoireEditEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repertoireEdit') }})
    repertoire_nom: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repertoireNom') }})
    
