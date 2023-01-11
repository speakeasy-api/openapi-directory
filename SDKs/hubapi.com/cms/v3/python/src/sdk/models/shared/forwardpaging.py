import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nextpage as shared_nextpage


@dataclass_json
@dataclasses.dataclass
class ForwardPaging:
    next: Optional[shared_nextpage.NextPage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    
