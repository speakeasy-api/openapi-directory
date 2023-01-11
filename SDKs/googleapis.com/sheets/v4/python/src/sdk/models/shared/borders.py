import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import border as shared_border


@dataclass_json
@dataclasses.dataclass
class Borders:
    r"""Borders
    The borders of the cell.
    """
    
    bottom: Optional[shared_border.Border] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottom') }})
    left: Optional[shared_border.Border] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    right: Optional[shared_border.Border] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('right') }})
    top: Optional[shared_border.Border] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('top') }})
    
