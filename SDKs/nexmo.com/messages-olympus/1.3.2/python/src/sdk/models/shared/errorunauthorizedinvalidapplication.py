import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ErrorUnauthorizedInvalidApplication:
    r"""ErrorUnauthorizedInvalidApplication
    Invalid Application Type
    """
    
    instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    
