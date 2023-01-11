import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import environment as shared_environment


@dataclass_json
@dataclasses.dataclass
class ListEnvironmentsResponse:
    r"""ListEnvironmentsResponse
    Response for listing environments.
    """
    
    environments: Optional[list[shared_environment.Environment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
