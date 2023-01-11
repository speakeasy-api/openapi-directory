import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectedapplication as shared_connectedapplication


@dataclass_json
@dataclasses.dataclass
class ItemApplicationListResponse:
    r"""ItemApplicationListResponse
    Describes the connected application for a particular end user.
    """
    
    applications: list[shared_connectedapplication.ConnectedApplication] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    
