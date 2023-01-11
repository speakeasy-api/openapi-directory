import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceid as shared_resourceid


@dataclass_json
@dataclasses.dataclass
class ActivityContentDetailsChannelItem:
    r"""ActivityContentDetailsChannelItem
    Details about a resource which was added to a channel.
    """
    
    resource_id: Optional[shared_resourceid.ResourceID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    
