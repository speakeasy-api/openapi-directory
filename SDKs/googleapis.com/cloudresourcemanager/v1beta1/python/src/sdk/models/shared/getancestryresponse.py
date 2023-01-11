import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ancestor as shared_ancestor


@dataclass_json
@dataclasses.dataclass
class GetAncestryResponse:
    r"""GetAncestryResponse
    Response from the projects.getAncestry method.
    """
    
    ancestor: Optional[list[shared_ancestor.Ancestor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ancestor') }})
    
