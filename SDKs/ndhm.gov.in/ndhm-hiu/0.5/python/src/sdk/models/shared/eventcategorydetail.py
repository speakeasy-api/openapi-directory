import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import carecontextdefinition as shared_carecontextdefinition
from ..shared import hitypeenum_enum as shared_hitypeenum_enum


@dataclass_json
@dataclasses.dataclass
class EventCategoryDetail:
    care_context: shared_carecontextdefinition.CareContextDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContext') }})
    hi_types: list[shared_hitypeenum_enum.HiTypeEnumEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiTypes') }})
    
