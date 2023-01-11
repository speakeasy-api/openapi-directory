import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionfilter as shared_dimensionfilter

class DimensionFilterClauseOperatorEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    OR = "OR"
    AND = "AND"


@dataclass_json
@dataclasses.dataclass
class DimensionFilterClause:
    r"""DimensionFilterClause
    A group of dimension filters. Set the operator value to specify how the filters are logically combined.
    """
    
    filters: Optional[list[shared_dimensionfilter.DimensionFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    operator: Optional[DimensionFilterClauseOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    
