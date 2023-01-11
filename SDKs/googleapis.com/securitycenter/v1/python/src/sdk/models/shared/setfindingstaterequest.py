import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SetFindingStateRequestStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclasses.dataclass
class SetFindingStateRequest:
    r"""SetFindingStateRequest
    Request message for updating a finding's state. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: \"organizations/{organization_id}/sources/{source_id}/findings/{finding_id}\", \"folders/{folder_id}/sources/{source_id}/findings/{finding_id}\", \"projects/{project_id}/sources/{source_id}/findings/{finding_id}\".
    """
    
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[SetFindingStateRequestStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
