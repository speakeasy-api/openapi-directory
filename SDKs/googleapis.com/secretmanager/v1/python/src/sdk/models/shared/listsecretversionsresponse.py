import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import secretversion as shared_secretversion


@dataclass_json
@dataclasses.dataclass
class ListSecretVersionsResponse:
    r"""ListSecretVersionsResponse
    Response message for SecretManagerService.ListSecretVersions.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    versions: Optional[list[shared_secretversion.SecretVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
