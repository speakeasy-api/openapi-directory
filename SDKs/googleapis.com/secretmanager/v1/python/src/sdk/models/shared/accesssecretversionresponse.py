import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import secretpayload as shared_secretpayload


@dataclass_json
@dataclasses.dataclass
class AccessSecretVersionResponse:
    r"""AccessSecretVersionResponse
    Response message for SecretManagerService.AccessSecretVersion.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    payload: Optional[shared_secretpayload.SecretPayload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    
