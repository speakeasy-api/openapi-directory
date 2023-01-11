import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googledevtoolsartifactregistryv1file as shared_googledevtoolsartifactregistryv1file


@dataclass_json
@dataclasses.dataclass
class ListFilesResponse:
    r"""ListFilesResponse
    The response from listing files.
    """
    
    files: Optional[list[shared_googledevtoolsartifactregistryv1file.GoogleDevtoolsArtifactregistryV1File]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
