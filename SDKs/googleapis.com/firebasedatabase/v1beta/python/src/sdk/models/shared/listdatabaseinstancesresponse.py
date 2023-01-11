import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import databaseinstance as shared_databaseinstance


@dataclass_json
@dataclasses.dataclass
class ListDatabaseInstancesResponse:
    r"""ListDatabaseInstancesResponse
    The response from the ListDatabaseInstances method.
    """
    
    instances: Optional[list[shared_databaseinstance.DatabaseInstance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
