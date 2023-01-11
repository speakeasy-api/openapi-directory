import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filterview as shared_filterview


@dataclass_json
@dataclasses.dataclass
class AddFilterViewRequest:
    r"""AddFilterViewRequest
    Adds a filter view.
    """
    
    filter: Optional[shared_filterview.FilterView] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    
