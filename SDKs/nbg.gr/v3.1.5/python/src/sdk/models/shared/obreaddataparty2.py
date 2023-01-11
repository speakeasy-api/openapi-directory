import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obparty2 as shared_obparty2


@dataclass_json
@dataclasses.dataclass
class ObReadDataParty2:
    party: Optional[shared_obparty2.ObParty2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Party') }})
    
