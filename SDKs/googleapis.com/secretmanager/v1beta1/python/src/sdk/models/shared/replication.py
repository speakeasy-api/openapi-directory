import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usermanaged as shared_usermanaged


@dataclass_json
@dataclasses.dataclass
class Replication:
    r"""Replication
    A policy that defines the replication configuration of data.
    """
    
    automatic: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automatic') }})
    user_managed: Optional[shared_usermanaged.UserManaged] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userManaged') }})
    
