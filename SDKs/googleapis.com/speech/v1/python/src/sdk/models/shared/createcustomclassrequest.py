import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customclass as shared_customclass


@dataclass_json
@dataclasses.dataclass
class CreateCustomClassRequest:
    r"""CreateCustomClassRequest
    Message sent by the client for the `CreateCustomClass` method.
    """
    
    custom_class: Optional[shared_customclass.CustomClass] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customClass') }})
    custom_class_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customClassId') }})
    
