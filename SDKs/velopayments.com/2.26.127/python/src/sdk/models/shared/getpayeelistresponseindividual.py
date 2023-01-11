import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import name as shared_name


@dataclass_json
@dataclasses.dataclass
class GetPayeeListResponseIndividual:
    name: Optional[shared_name.Name] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
