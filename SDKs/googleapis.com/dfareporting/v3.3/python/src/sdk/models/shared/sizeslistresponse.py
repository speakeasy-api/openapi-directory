import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import size as shared_size


@dataclass_json
@dataclasses.dataclass
class SizesListResponse:
    r"""SizesListResponse
    Size List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    sizes: Optional[list[shared_size.Size]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizes') }})
    
