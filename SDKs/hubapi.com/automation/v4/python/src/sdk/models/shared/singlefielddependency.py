import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SingleFieldDependencyDependencyTypeEnum(str, Enum):
    SINGLE_FIELD = "SINGLE_FIELD"


@dataclass_json
@dataclasses.dataclass
class SingleFieldDependency:
    controlling_field_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('controllingFieldName') }})
    dependency_type: SingleFieldDependencyDependencyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencyType') }})
    dependent_field_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependentFieldNames') }})
    
