import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namein as shared_namein


@dataclass_json
@dataclasses.dataclass
class BatchNameIn:
    proper_nouns: Optional[list[shared_namein.NameIn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properNouns') }})
    
