import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identityconfig as shared_identityconfig
from ..shared import kerberosconfig as shared_kerberosconfig


@dataclass_json
@dataclasses.dataclass
class SecurityConfig:
    r"""SecurityConfig
    Security related configuration, including encryption, Kerberos, etc.
    """
    
    identity_config: Optional[shared_identityconfig.IdentityConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityConfig') }})
    kerberos_config: Optional[shared_kerberosconfig.KerberosConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kerberosConfig') }})
    
