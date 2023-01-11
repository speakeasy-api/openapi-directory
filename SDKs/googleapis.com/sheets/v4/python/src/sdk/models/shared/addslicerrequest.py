import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import slicer as shared_slicer


@dataclass_json
@dataclasses.dataclass
class AddSlicerRequest:
    r"""AddSlicerRequest
    Adds a slicer to a sheet in the spreadsheet.
    """
    
    slicer: Optional[shared_slicer.Slicer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slicer') }})
    
