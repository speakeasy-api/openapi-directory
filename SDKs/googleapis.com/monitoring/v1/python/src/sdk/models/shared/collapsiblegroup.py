import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CollapsibleGroup:
    r"""CollapsibleGroup
    A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets.
    """
    
    collapsed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collapsed') }})
    
