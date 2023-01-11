import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AccessTokenInfoResponse:
    app_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app_id') }})
    expires_in: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    hub_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub_id') }})
    scope_to_scope_group_pks: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope_to_scope_group_pks') }})
    scopes: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    token_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    trial_scope_to_scope_group_pks: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trial_scope_to_scope_group_pks') }})
    trial_scopes: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trial_scopes') }})
    user_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    hub_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hub_domain') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
