import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AvailableVendorsFilterTypesEnum(str, Enum):
    TRANSLATOR = "translator"
    PROOFREADER = "proofreader"
    BOTH = "both"


@dataclass_json
@dataclasses.dataclass
class AvailableVendorsFilter:
    corporate_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corporateId') }})
    manual_work_permission: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualWorkPermission') }})
    source_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceLanguage') }})
    target_languages: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLanguages') }})
    types: Optional[list[AvailableVendorsFilterTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    
