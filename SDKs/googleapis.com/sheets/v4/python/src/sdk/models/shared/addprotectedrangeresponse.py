import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protectedrange as shared_protectedrange


@dataclass_json
@dataclasses.dataclass
class AddProtectedRangeResponse:
    r"""AddProtectedRangeResponse
    The result of adding a new protected range.
    """
    
    protected_range: Optional[shared_protectedrange.ProtectedRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedRange') }})
    
