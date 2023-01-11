import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LdapAuthModuleConfig:
    r"""LdapAuthModuleConfig
    Settings to authenticate users using a generic OAuth2 provider
    """
    
    admin_password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminPassword') }})
    admin_username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminUsername') }})
    desc: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    email_field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailField') }})
    group_filter: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupFilter') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    name_field: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameField') }})
    search_base: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchBase') }})
    search_filter: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchFilter') }})
    server_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverUrl') }})
    session_max_age: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionMaxAge') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_base: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userBase') }})
    otoroshi_data_field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otoroshiDataField') }})
    
