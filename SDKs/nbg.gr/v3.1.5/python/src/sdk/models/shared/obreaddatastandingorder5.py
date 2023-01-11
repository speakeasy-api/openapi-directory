import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obstandingorder5 as shared_obstandingorder5


@dataclass_json
@dataclasses.dataclass
class ObReadDataStandingOrder5:
    standing_order: Optional[list[shared_obstandingorder5.ObStandingOrder5]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandingOrder') }})
    
