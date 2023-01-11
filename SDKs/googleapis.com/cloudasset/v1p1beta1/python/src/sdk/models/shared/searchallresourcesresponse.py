import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import standardresourcemetadata as shared_standardresourcemetadata


@dataclass_json
@dataclasses.dataclass
class SearchAllResourcesResponse:
    r"""SearchAllResourcesResponse
    Search all resources response.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    results: Optional[list[shared_standardresourcemetadata.StandardResourceMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
