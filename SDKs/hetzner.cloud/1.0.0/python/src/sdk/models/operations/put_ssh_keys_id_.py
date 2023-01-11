import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PutSSHKeysIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutSSHKeysIDRequestBody:
    labels: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSSHKeysID200ApplicationJSONSSHKey:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    fingerprint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    

@dataclass_json
@dataclasses.dataclass
class PutSSHKeysID200ApplicationJSON:
    ssh_key: PutSSHKeysID200ApplicationJSONSSHKey = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_key') }})
    

@dataclasses.dataclass
class PutSSHKeysIDRequest:
    path_params: PutSSHKeysIDPathParams = dataclasses.field()
    request: Optional[PutSSHKeysIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutSSHKeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_ssh_keys_id_200_application_json_object: Optional[PutSSHKeysID200ApplicationJSON] = dataclasses.field(default=None)
    
