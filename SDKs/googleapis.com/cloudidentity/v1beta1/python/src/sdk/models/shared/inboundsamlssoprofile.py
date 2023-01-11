import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import samlidpconfig as shared_samlidpconfig
from ..shared import samlspconfig as shared_samlspconfig


@dataclass_json
@dataclasses.dataclass
class InboundSamlSsoProfile:
    r"""InboundSamlSsoProfile
    A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
    """
    
    customer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    idp_config: Optional[shared_samlidpconfig.SamlIdpConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpConfig') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sp_config: Optional[shared_samlspconfig.SamlSpConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spConfig') }})
    

@dataclass_json
@dataclasses.dataclass
class InboundSamlSsoProfileInput:
    r"""InboundSamlSsoProfileInput
    A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider.
    """
    
    customer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    idp_config: Optional[shared_samlidpconfig.SamlIdpConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpConfig') }})
    
