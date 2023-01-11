import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import posixaccount as shared_posixaccount
from ..shared import securitykey as shared_securitykey
from ..shared import sshpublickey as shared_sshpublickey


@dataclass_json
@dataclasses.dataclass
class LoginProfile:
    r"""LoginProfile
    The user profile information used for logging in to a virtual machine on Google Compute Engine.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    posix_accounts: Optional[list[shared_posixaccount.PosixAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posixAccounts') }})
    security_keys: Optional[list[shared_securitykey.SecurityKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityKeys') }})
    ssh_public_keys: Optional[dict[str, shared_sshpublickey.SSHPublicKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshPublicKeys') }})
    
