import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TokenResponseIf:
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    expires_in: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    refresh_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    token_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    id_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id_token') }})
    
