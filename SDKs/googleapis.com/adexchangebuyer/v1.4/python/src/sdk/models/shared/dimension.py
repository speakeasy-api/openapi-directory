import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensiondimensionvalue as shared_dimensiondimensionvalue


@dataclass_json
@dataclasses.dataclass
class Dimension:
    r"""Dimension
    This message carries publisher provided breakdown. E.g. {dimension_type: 'COUNTRY', [{dimension_value: {id: 1, name: 'US'}}, {dimension_value: {id: 2, name: 'UK'}}]}
    """
    
    dimension_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionType') }})
    dimension_values: Optional[list[shared_dimensiondimensionvalue.DimensionDimensionValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValues') }})
    
