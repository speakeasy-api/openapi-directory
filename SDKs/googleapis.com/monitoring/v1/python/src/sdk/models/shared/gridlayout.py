import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import widget as shared_widget


@dataclass_json
@dataclasses.dataclass
class GridLayout:
    r"""GridLayout
    A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy.
    """
    
    columns: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    widgets: Optional[list[shared_widget.Widget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widgets') }})
    
