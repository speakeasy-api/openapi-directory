import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageversion as shared_imageversion


@dataclass_json
@dataclasses.dataclass
class ListImageVersionsResponse:
    r"""ListImageVersionsResponse
    The ImageVersions in a project and location.
    """
    
    image_versions: Optional[list[shared_imageversion.ImageVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageVersions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
