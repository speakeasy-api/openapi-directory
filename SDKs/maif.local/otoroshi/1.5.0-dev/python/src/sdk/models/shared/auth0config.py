import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Auth0Config:
    r"""Auth0Config
    Configuration for Auth0 domain
    """
    
    callback_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUrl') }})
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    
