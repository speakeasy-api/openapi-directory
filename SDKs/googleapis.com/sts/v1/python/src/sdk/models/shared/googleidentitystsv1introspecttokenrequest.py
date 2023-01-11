import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleIdentityStsV1IntrospectTokenRequest:
    r"""GoogleIdentityStsV1IntrospectTokenRequest
    Request message for IntrospectToken.
    """
    
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    token_type_hint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenTypeHint') }})
    
