import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oberror1 as shared_oberror1


@dataclass_json
@dataclasses.dataclass
class ObErrorResponse1:
    r"""ObErrorResponse1
    An array of detail error codes, and messages, and URLs to documentation to help remediation.
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    errors: list[shared_oberror1.ObError1] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    
