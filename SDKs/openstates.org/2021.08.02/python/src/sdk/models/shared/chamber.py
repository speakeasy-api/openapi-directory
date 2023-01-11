import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import post as shared_post


@dataclass_json
@dataclasses.dataclass
class Chamber:
    classification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    districts: Optional[list[shared_post.Post]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('districts') }})
    
