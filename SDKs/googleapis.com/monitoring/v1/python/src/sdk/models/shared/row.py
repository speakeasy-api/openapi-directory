import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import widget as shared_widget


@dataclass_json
@dataclasses.dataclass
class Row:
    r"""Row
    Defines the layout properties and content for a row.
    """
    
    weight: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    widgets: Optional[list[shared_widget.Widget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widgets') }})
    
