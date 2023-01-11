import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectivitytest as shared_connectivitytest


@dataclass_json
@dataclasses.dataclass
class ListConnectivityTestsResponse:
    r"""ListConnectivityTestsResponse
    Response for the `ListConnectivityTests` method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    resources: Optional[list[shared_connectivitytest.ConnectivityTest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
