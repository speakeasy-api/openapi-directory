import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import source as shared_source


@dataclass_json
@dataclasses.dataclass
class ListSourcesResponse:
    r"""ListSourcesResponse
    Response message for listing sources.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    sources: Optional[list[shared_source.Source]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
