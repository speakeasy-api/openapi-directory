import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import manifest as shared_manifest


@dataclass_json
@dataclasses.dataclass
class ManifestsListResponse:
    r"""ManifestsListResponse
    A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.
    """
    
    manifests: Optional[list[shared_manifest.Manifest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifests') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
