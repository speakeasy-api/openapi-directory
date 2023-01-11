import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import application as shared_application


@dataclass_json
@dataclasses.dataclass
class Embedded:
    applications: Optional[list[shared_application.Application]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    
