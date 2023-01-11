import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import form_enum_form_types_enum as shared_form_enum_form_types_enum


@dataclass_json
@dataclasses.dataclass
class VerifyV2Form:
    form_meta: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_meta') }})
    form_type: Optional[shared_form_enum_form_types_enum.FormEnumFormTypesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_type') }})
    forms: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forms') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
