import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConditionalSingleFieldDependencyDependencyTypeEnum(str, Enum):
    CONDITIONAL_SINGLE_FIELD = "CONDITIONAL_SINGLE_FIELD"


@dataclass_json
@dataclasses.dataclass
class ConditionalSingleFieldDependency:
    controlling_field_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('controllingFieldName') }})
    controlling_field_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('controllingFieldValue') }})
    dependency_type: ConditionalSingleFieldDependencyDependencyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencyType') }})
    dependent_field_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependentFieldNames') }})
    
