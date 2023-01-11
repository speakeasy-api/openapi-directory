import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class APIVersionAll:
    status: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class APIVersion:
    all: Optional[list[APIVersionAll]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    latest: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest') }})
    
