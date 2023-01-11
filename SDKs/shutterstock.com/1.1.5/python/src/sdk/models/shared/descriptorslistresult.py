import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import descriptors as shared_descriptors


@dataclass_json
@dataclasses.dataclass
class DescriptorsListResult:
    r"""DescriptorsListResult
    List Descriptors results
    """
    
    data: Optional[list[shared_descriptors.Descriptors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    
