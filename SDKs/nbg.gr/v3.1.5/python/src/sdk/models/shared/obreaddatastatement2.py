import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obstatement2 as shared_obstatement2


@dataclass_json
@dataclasses.dataclass
class ObReadDataStatement2:
    statement: Optional[list[shared_obstatement2.ObStatement2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statement') }})
    
