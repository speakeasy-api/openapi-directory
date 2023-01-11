import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetImagesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetImagesID200ApplicationJSONImageCreatedFrom:
    r"""GetImagesID200ApplicationJSONImageCreatedFrom
    Information about the Server the Image was created from
    """
    
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetImagesID200ApplicationJSONImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclasses.dataclass
class GetImagesID200ApplicationJSONImageProtection:
    r"""GetImagesID200ApplicationJSONImageProtection
    Protection configuration for the Resource
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetImagesID200ApplicationJSONImageStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class GetImagesID200ApplicationJSONImageTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclasses.dataclass
class GetImagesID200ApplicationJSONImage:
    bound_to: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bound_to') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    created_from: GetImagesID200ApplicationJSONImageCreatedFrom = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_from') }})
    deleted: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_size') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_size') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_flavor: GetImagesID200ApplicationJSONImageOsFlavorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_flavor') }})
    os_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    protection: GetImagesID200ApplicationJSONImageProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    status: GetImagesID200ApplicationJSONImageStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: GetImagesID200ApplicationJSONImageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    build_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_id') }})
    rapid_deploy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rapid_deploy') }})
    

@dataclass_json
@dataclasses.dataclass
class GetImagesID200ApplicationJSON:
    image: Optional[GetImagesID200ApplicationJSONImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    

@dataclasses.dataclass
class GetImagesIDRequest:
    path_params: GetImagesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetImagesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_images_id_200_application_json_object: Optional[GetImagesID200ApplicationJSON] = dataclasses.field(default=None)
    
