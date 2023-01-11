import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apiversion as shared_apiversion


@dataclass_json
@dataclasses.dataclass
class ListAPIVersionsResponse:
    r"""ListAPIVersionsResponse
    Response message for ListApiVersions.
    """
    
    api_versions: Optional[list[shared_apiversion.APIVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
