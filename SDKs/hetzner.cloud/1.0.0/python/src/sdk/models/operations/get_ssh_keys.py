import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetSSHKeysSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"


@dataclasses.dataclass
class GetSSHKeysQueryParams:
    fingerprint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fingerprint', 'style': 'form', 'explode': True }})
    label_selector: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetSSHKeysSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetSSHKeys200ApplicationJSONMetaPagination:
    last_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSSHKeys200ApplicationJSONMeta:
    pagination: GetSSHKeys200ApplicationJSONMetaPagination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSSHKeys200ApplicationJSONSSHKeys:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    fingerprint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSSHKeys200ApplicationJSON:
    ssh_keys: list[GetSSHKeys200ApplicationJSONSSHKeys] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_keys') }})
    meta: Optional[GetSSHKeys200ApplicationJSONMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetSSHKeysRequest:
    query_params: GetSSHKeysQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSSHKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_ssh_keys_200_application_json_object: Optional[GetSSHKeys200ApplicationJSON] = dataclasses.field(default=None)
    
