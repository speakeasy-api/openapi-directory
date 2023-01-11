import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status


@dataclass_json
@dataclasses.dataclass
class ModelState:
    r"""ModelState
    State common to all model types. Includes publishing and validation information.
    """
    
    published: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    validation_error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationError') }})
    
