import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostServersIDActionsCreateImagePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsCreateImageCreateImageRequestLabels:
    r"""PostServersIDActionsCreateImageCreateImageRequestLabels
    User-defined labels (key-value pairs)
    """
    
    labelkey: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelkey') }})
    
class PostServersIDActionsCreateImageCreateImageRequestTypeEnum(str, Enum):
    SNAPSHOT = "snapshot"
    BACKUP = "backup"


@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsCreateImageCreateImageRequest:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[PostServersIDActionsCreateImageCreateImageRequestLabels] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    type: Optional[PostServersIDActionsCreateImageCreateImageRequestTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsCreateImage201ApplicationJSONActionError:
    r"""PostServersIDActionsCreateImage201ApplicationJSONActionError
    Error message for the Action if error occurred, otherwise null
    """
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsCreateImage201ApplicationJSONActionResources:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnum(str, Enum):
    SUCCESS = "success"
    RUNNING = "running"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsCreateImage201ApplicationJSONAction:
    command: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    error: PostServersIDActionsCreateImage201ApplicationJSONActionError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    finished: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    resources: list[PostServersIDActionsCreateImage201ApplicationJSONActionResources] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    started: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    status: PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsCreateImage201ApplicationJSONImageCreatedFrom:
    r"""PostServersIDActionsCreateImage201ApplicationJSONImageCreatedFrom
    Information about the Server the Image was created from
    """
    
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsCreateImage201ApplicationJSONImageProtection:
    r"""PostServersIDActionsCreateImage201ApplicationJSONImageProtection
    Protection configuration for the Resource
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class PostServersIDActionsCreateImage201ApplicationJSONImageStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsCreateImage201ApplicationJSONImage:
    bound_to: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bound_to') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    created_from: PostServersIDActionsCreateImage201ApplicationJSONImageCreatedFrom = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_from') }})
    deleted: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_size') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_size') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_flavor: PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_flavor') }})
    os_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    protection: PostServersIDActionsCreateImage201ApplicationJSONImageProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    status: PostServersIDActionsCreateImage201ApplicationJSONImageStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    build_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_id') }})
    rapid_deploy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rapid_deploy') }})
    

@dataclass_json
@dataclasses.dataclass
class PostServersIDActionsCreateImage201ApplicationJSON:
    action: Optional[PostServersIDActionsCreateImage201ApplicationJSONAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    image: Optional[PostServersIDActionsCreateImage201ApplicationJSONImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    

@dataclasses.dataclass
class PostServersIDActionsCreateImageRequest:
    path_params: PostServersIDActionsCreateImagePathParams = dataclasses.field()
    request: Optional[PostServersIDActionsCreateImageCreateImageRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostServersIDActionsCreateImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_servers_id_actions_create_image_201_application_json_object: Optional[PostServersIDActionsCreateImage201ApplicationJSON] = dataclasses.field(default=None)
    
