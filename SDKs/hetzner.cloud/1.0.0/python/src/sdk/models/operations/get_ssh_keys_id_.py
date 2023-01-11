import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetSSHKeysIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetSSHKeysID200ApplicationJSONSSHKey:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    fingerprint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSSHKeysID200ApplicationJSON:
    ssh_key: GetSSHKeysID200ApplicationJSONSSHKey = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_key') }})
    

@dataclasses.dataclass
class GetSSHKeysIDRequest:
    path_params: GetSSHKeysIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSSHKeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_ssh_keys_id_200_application_json_object: Optional[GetSSHKeysID200ApplicationJSON] = dataclasses.field(default=None)
    
