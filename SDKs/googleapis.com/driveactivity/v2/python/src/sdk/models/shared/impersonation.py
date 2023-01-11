import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class Impersonation:
    r"""Impersonation
    Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is not currently available.
    """
    
    impersonated_user: Optional[shared_user.User] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impersonatedUser') }})
    
