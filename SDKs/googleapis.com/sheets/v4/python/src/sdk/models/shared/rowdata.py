import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import celldata as shared_celldata


@dataclass_json
@dataclasses.dataclass
class RowData:
    r"""RowData
    Data about each cell in a row.
    """
    
    values: Optional[list[shared_celldata.CellData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
