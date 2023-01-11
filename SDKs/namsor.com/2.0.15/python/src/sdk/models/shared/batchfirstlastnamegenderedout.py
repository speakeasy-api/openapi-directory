import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstlastnamegenderedout as shared_firstlastnamegenderedout


@dataclass_json
@dataclasses.dataclass
class BatchFirstLastNameGenderedOut:
    r"""BatchFirstLastNameGenderedOut
    Represents the output of inferring the LIKELY gender from a list of personal names.
    """
    
    personal_names: Optional[list[shared_firstlastnamegenderedout.FirstLastNameGenderedOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
