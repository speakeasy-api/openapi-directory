import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import impersonation as shared_impersonation
from ..shared import systemevent as shared_systemevent
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class Actor:
    r"""Actor
    The actor of a Drive activity.
    """
    
    administrator: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('administrator') }})
    anonymous: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymous') }})
    impersonation: Optional[shared_impersonation.Impersonation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impersonation') }})
    system: Optional[shared_systemevent.SystemEvent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    user: Optional[shared_user.User] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
