import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gridcoordinate as shared_gridcoordinate
from ..shared import gridrange as shared_gridrange

class CutPasteRequestPasteTypeEnum(str, Enum):
    PASTE_NORMAL = "PASTE_NORMAL"
    PASTE_VALUES = "PASTE_VALUES"
    PASTE_FORMAT = "PASTE_FORMAT"
    PASTE_NO_BORDERS = "PASTE_NO_BORDERS"
    PASTE_FORMULA = "PASTE_FORMULA"
    PASTE_DATA_VALIDATION = "PASTE_DATA_VALIDATION"
    PASTE_CONDITIONAL_FORMATTING = "PASTE_CONDITIONAL_FORMATTING"


@dataclass_json
@dataclasses.dataclass
class CutPasteRequest:
    r"""CutPasteRequest
    Moves data from the source to the destination.
    """
    
    destination: Optional[shared_gridcoordinate.GridCoordinate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    paste_type: Optional[CutPasteRequestPasteTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pasteType') }})
    source: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
