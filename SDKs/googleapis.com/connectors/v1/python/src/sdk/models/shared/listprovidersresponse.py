import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provider as shared_provider


@dataclass_json
@dataclasses.dataclass
class ListProvidersResponse:
    r"""ListProvidersResponse
    Response message for Connectors.ListProviders.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    providers: Optional[list[shared_provider.Provider]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providers') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
