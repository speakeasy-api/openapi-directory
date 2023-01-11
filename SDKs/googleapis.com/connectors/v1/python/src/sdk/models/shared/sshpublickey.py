import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import secret as shared_secret


@dataclass_json
@dataclasses.dataclass
class SSHPublicKey:
    r"""SSHPublicKey
    Parameters to support Ssh public key Authentication.
    """
    
    cert_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certType') }})
    ssh_client_cert: Optional[shared_secret.Secret] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshClientCert') }})
    ssh_client_cert_pass: Optional[shared_secret.Secret] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshClientCertPass') }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
