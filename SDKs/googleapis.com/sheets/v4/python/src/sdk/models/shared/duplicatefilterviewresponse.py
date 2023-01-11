import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filterview as shared_filterview


@dataclass_json
@dataclasses.dataclass
class DuplicateFilterViewResponse:
    r"""DuplicateFilterViewResponse
    The result of a filter view being duplicated.
    """
    
    filter: Optional[shared_filterview.FilterView] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    
