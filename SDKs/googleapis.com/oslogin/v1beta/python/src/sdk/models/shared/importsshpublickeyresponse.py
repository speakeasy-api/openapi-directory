import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loginprofile as shared_loginprofile


@dataclass_json
@dataclasses.dataclass
class ImportSSHPublicKeyResponse:
    r"""ImportSSHPublicKeyResponse
    A response message for importing an SSH public key.
    """
    
    details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    login_profile: Optional[shared_loginprofile.LoginProfile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginProfile') }})
    
