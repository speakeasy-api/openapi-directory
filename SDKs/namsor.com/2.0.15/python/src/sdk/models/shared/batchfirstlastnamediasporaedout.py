import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstlastnamediasporaedout as shared_firstlastnamediasporaedout


@dataclass_json
@dataclasses.dataclass
class BatchFirstLastNameDiasporaedOut:
    r"""BatchFirstLastNameDiasporaedOut
    Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
    """
    
    personal_names: Optional[list[shared_firstlastnamediasporaedout.FirstLastNameDiasporaedOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
