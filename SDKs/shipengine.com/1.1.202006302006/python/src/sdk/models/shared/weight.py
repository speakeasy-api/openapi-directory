import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import weight_unit_enum as shared_weight_unit_enum


@dataclass_json
@dataclasses.dataclass
class Weight:
    r"""Weight
    The weight of a package
    """
    
    unit: shared_weight_unit_enum.WeightUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    value: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
