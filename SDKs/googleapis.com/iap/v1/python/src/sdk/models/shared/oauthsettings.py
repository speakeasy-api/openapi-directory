import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OAuthSettings:
    r"""OAuthSettings
    Configuration for OAuth login&consent flow behavior as well as for OAuth Credentials.
    """
    
    login_hint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginHint') }})
    
