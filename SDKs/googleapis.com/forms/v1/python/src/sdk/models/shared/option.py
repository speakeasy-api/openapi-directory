import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image
from ..shared import image as shared_image

class OptionGoToActionEnum(str, Enum):
    GO_TO_ACTION_UNSPECIFIED = "GO_TO_ACTION_UNSPECIFIED"
    NEXT_SECTION = "NEXT_SECTION"
    RESTART_FORM = "RESTART_FORM"
    SUBMIT_FORM = "SUBMIT_FORM"


@dataclass_json
@dataclasses.dataclass
class OptionInput:
    r"""OptionInput
    An option for a Choice question.
    """
    
    go_to_action: Optional[OptionGoToActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goToAction') }})
    go_to_section_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goToSectionId') }})
    image: Optional[shared_image.ImageInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    is_other: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isOther') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Option:
    r"""Option
    An option for a Choice question.
    """
    
    go_to_action: Optional[OptionGoToActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goToAction') }})
    go_to_section_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goToSectionId') }})
    image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    is_other: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isOther') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
