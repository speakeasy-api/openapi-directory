import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PathReportDimensionValueMatchTypeEnum(str, Enum):
    EXACT = "EXACT"
    BEGINS_WITH = "BEGINS_WITH"
    CONTAINS = "CONTAINS"
    WILDCARD_EXPRESSION = "WILDCARD_EXPRESSION"


@dataclass_json
@dataclasses.dataclass
class PathReportDimensionValue:
    r"""PathReportDimensionValue
    Represents a PathReportDimensionValue resource.
    """
    
    dimension_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionName') }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    match_type: Optional[PathReportDimensionValueMatchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchType') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
