import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import secret as shared_secret


@dataclass_json
@dataclasses.dataclass
class KerberosConfig:
    r"""KerberosConfig
    Configuration information for a Kerberos principal.
    """
    
    keytab: Optional[shared_secret.Secret] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keytab') }})
    krb5_config_gcs_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('krb5ConfigGcsUri') }})
    principal: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal') }})
    
