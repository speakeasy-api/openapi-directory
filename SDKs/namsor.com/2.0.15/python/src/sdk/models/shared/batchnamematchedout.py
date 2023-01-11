import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namematchedout as shared_namematchedout


@dataclass_json
@dataclasses.dataclass
class BatchNameMatchedOut:
    matched_names: Optional[list[shared_namematchedout.NameMatchedOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedNames') }})
    
