import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ConnectFirstmileRequestBody:
    r"""ConnectFirstmileRequestBody
    A First Mile account information request body
    """
    
    mailer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailer_id') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile_name') }})
    
