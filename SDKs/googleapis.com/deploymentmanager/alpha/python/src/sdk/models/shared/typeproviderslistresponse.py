import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typeprovider as shared_typeprovider


@dataclass_json
@dataclasses.dataclass
class TypeProvidersListResponse:
    r"""TypeProvidersListResponse
    A response that returns all Type Providers supported by Deployment Manager
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    type_providers: Optional[list[shared_typeprovider.TypeProvider]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeProviders') }})
    
