import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import knownuser as shared_knownuser


@dataclass_json
@dataclasses.dataclass
class User:
    r"""User
    Information about an end user.
    """
    
    deleted_user: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedUser') }})
    known_user: Optional[shared_knownuser.KnownUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knownUser') }})
    unknown_user: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknownUser') }})
    
