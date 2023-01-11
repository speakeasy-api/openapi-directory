import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RefreshTokenInfoResponse:
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    hub_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub_id') }})
    scopes: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    token_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    user_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    hub_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub_domain') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
