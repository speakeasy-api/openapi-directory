import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import name_2 as shared_name_2


@dataclass_json
@dataclasses.dataclass
class GetPayeeListResponseIndividual2:
    name: Optional[shared_name_2.Name2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
