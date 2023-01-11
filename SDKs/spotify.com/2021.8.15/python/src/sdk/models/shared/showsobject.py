import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simplifiedshowobject as shared_simplifiedshowobject


@dataclass_json
@dataclasses.dataclass
class ShowsObject:
    shows: Optional[list[shared_simplifiedshowobject.SimplifiedShowObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shows') }})
    
