import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import border as shared_border
from ..shared import gridrange as shared_gridrange


@dataclass_json
@dataclasses.dataclass
class UpdateBordersRequest:
    r"""UpdateBordersRequest
    Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE.
    """
    
    bottom: Optional[shared_border.Border] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottom') }})
    inner_horizontal: Optional[shared_border.Border] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('innerHorizontal') }})
    inner_vertical: Optional[shared_border.Border] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('innerVertical') }})
    left: Optional[shared_border.Border] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    right: Optional[shared_border.Border] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('right') }})
    top: Optional[shared_border.Border] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('top') }})
    
