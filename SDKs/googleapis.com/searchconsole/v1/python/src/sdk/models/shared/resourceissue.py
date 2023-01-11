import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blockedresource as shared_blockedresource


@dataclass_json
@dataclasses.dataclass
class ResourceIssue:
    r"""ResourceIssue
    Information about a resource with issue.
    """
    
    blocked_resource: Optional[shared_blockedresource.BlockedResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedResource') }})
    
