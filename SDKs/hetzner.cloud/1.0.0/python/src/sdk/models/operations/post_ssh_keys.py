import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostSSHKeysRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    labels: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSSHKeys201ApplicationJSONSSHKey:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    fingerprint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSSHKeys201ApplicationJSON:
    ssh_key: PostSSHKeys201ApplicationJSONSSHKey = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh_key') }})
    

@dataclasses.dataclass
class PostSSHKeysRequest:
    request: Optional[PostSSHKeysRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSSHKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_ssh_keys_201_application_json_object: Optional[PostSSHKeys201ApplicationJSON] = dataclasses.field(default=None)
    
