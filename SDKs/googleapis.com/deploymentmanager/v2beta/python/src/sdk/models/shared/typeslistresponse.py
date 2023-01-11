import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import type as shared_type


@dataclass_json
@dataclasses.dataclass
class TypesListResponse:
    r"""TypesListResponse
    A response that returns all Types supported by Deployment Manager
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    types: Optional[list[shared_type.Type]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    
