import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publickeycredential as shared_publickeycredential


@dataclass_json
@dataclasses.dataclass
class DeviceCredential:
    r"""DeviceCredential
    A server-stored device credential used for authentication.
    """
    
    expiration_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationTime') }})
    public_key: Optional[shared_publickeycredential.PublicKeyCredential] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    
