import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import universaltwofactor as shared_universaltwofactor
from ..shared import webauthn as shared_webauthn


@dataclass_json
@dataclasses.dataclass
class SecurityKey:
    r"""SecurityKey
    The credential information for a Google registered security key.
    """
    
    private_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKey') }})
    public_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    universal_two_factor: Optional[shared_universaltwofactor.UniversalTwoFactor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('universalTwoFactor') }})
    web_authn: Optional[shared_webauthn.WebAuthn] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webAuthn') }})
    
