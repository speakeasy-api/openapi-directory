import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tile as shared_tile


@dataclass_json
@dataclasses.dataclass
class MosaicLayout:
    r"""MosaicLayout
    A mosaic layout divides the available space into a grid of blocks, and overlays the grid with tiles. Unlike GridLayout, tiles may span multiple grid blocks and can be placed at arbitrary locations in the grid.
    """
    
    columns: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    tiles: Optional[list[shared_tile.Tile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiles') }})
    
