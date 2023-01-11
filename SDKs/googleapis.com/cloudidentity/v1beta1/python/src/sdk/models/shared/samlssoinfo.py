import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SamlSsoInfo:
    r"""SamlSsoInfo
    Details that are applicable when `sso_mode` == `SAML_SSO`.
    """
    
    inbound_saml_sso_profile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inboundSamlSsoProfile') }})
    
