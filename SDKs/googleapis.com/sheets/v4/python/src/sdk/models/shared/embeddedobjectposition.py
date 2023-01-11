import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import overlayposition as shared_overlayposition


@dataclass_json
@dataclasses.dataclass
class EmbeddedObjectPosition:
    r"""EmbeddedObjectPosition
    The position of an embedded object such as a chart.
    """
    
    new_sheet: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSheet') }})
    overlay_position: Optional[shared_overlayposition.OverlayPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overlayPosition') }})
    sheet_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    
