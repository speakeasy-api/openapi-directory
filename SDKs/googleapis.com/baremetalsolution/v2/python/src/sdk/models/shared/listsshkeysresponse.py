import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sshkey as shared_sshkey


@dataclass_json
@dataclasses.dataclass
class ListSSHKeysResponse:
    r"""ListSSHKeysResponse
    Message for response of ListSSHKeys.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    ssh_keys: Optional[list[shared_sshkey.SSHKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshKeys') }})
    
