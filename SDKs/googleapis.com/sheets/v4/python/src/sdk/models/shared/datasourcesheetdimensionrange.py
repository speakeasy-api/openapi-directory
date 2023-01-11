import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourcecolumnreference as shared_datasourcecolumnreference


@dataclass_json
@dataclasses.dataclass
class DataSourceSheetDimensionRange:
    r"""DataSourceSheetDimensionRange
    A range along a single dimension on a DATA_SOURCE sheet.
    """
    
    column_references: Optional[list[shared_datasourcecolumnreference.DataSourceColumnReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnReferences') }})
    sheet_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    
