import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import databaseinstance as shared_databaseinstance
from ..shared import apiwarning as shared_apiwarning


@dataclass_json
@dataclasses.dataclass
class InstancesListResponse:
    r"""InstancesListResponse
    Database instances list response.
    """
    
    items: Optional[list[shared_databaseinstance.DatabaseInstance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    warnings: Optional[list[shared_apiwarning.APIWarning]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
