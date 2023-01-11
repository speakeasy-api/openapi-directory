import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import qualification as shared_qualification


@dataclass_json
@dataclasses.dataclass
class Subactivity:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    qualification_set: Optional[list[shared_qualification.Qualification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qualification_set') }})
    registries_subactivity_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registries_subactivity_code') }})
    
