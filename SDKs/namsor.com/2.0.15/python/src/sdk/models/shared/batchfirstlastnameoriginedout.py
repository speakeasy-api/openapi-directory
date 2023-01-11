import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstlastnameoriginedout as shared_firstlastnameoriginedout


@dataclass_json
@dataclasses.dataclass
class BatchFirstLastNameOriginedOut:
    r"""BatchFirstLastNameOriginedOut
    Represents the output of inferring the LIKELY origin from a list of personal names.
    """
    
    personal_names: Optional[list[shared_firstlastnameoriginedout.FirstLastNameOriginedOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
