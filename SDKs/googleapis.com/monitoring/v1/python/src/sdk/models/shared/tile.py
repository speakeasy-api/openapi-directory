import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import widget as shared_widget


@dataclass_json
@dataclasses.dataclass
class Tile:
    r"""Tile
    A single tile in the mosaic. The placement and size of the tile are configurable.
    """
    
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    widget: Optional[shared_widget.Widget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widget') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    x_pos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xPos') }})
    y_pos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yPos') }})
    
