import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import permissions as shared_permissions


@dataclass_json
@dataclasses.dataclass
class Explanation:
    r"""Explanation
    Explanation about the IAM policy search result.
    """
    
    matched_permissions: Optional[dict[str, shared_permissions.Permissions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedPermissions') }})
    
