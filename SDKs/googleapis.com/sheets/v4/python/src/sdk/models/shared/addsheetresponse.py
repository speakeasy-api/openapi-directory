import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sheetproperties as shared_sheetproperties


@dataclass_json
@dataclasses.dataclass
class AddSheetResponse:
    r"""AddSheetResponse
    The result of adding a sheet.
    """
    
    properties: Optional[shared_sheetproperties.SheetProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
