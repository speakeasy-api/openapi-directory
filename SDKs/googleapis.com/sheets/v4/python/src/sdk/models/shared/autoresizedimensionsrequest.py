import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourcesheetdimensionrange as shared_datasourcesheetdimensionrange
from ..shared import dimensionrange as shared_dimensionrange


@dataclass_json
@dataclasses.dataclass
class AutoResizeDimensionsRequest:
    r"""AutoResizeDimensionsRequest
    Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
    """
    
    data_source_sheet_dimensions: Optional[shared_datasourcesheetdimensionrange.DataSourceSheetDimensionRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceSheetDimensions') }})
    dimensions: Optional[shared_dimensionrange.DimensionRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    
