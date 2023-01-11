import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ClearBasicFilterRequest:
    r"""ClearBasicFilterRequest
    Clears the basic filter, if any exists on the sheet.
    """
    
    sheet_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    
