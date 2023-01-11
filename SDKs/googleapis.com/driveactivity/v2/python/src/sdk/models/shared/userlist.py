import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import singleuser as shared_singleuser


@dataclass_json
@dataclasses.dataclass
class UserList:
    r"""UserList
    Wrapper for UserList Field value.
    """
    
    values: Optional[list[shared_singleuser.SingleUser]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
