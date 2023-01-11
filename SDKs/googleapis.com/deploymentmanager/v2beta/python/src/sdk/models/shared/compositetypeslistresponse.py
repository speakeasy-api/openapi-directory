import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compositetype as shared_compositetype


@dataclass_json
@dataclasses.dataclass
class CompositeTypesListResponse:
    r"""CompositeTypesListResponse
    A response that returns all Composite Types supported by Deployment Manager
    """
    
    composite_types: Optional[list[shared_compositetype.CompositeType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compositeTypes') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
