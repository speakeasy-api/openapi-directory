import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetImagesSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"

class GetImagesStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"

class GetImagesTypeEnum(str, Enum):
    SYSTEM = "system"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    APP = "app"


@dataclasses.dataclass
class GetImagesQueryParams:
    bound_to: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bound_to', 'style': 'form', 'explode': True }})
    include_deprecated: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_deprecated', 'style': 'form', 'explode': True }})
    label_selector: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetImagesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[GetImagesStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    type: Optional[GetImagesTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetImages200ApplicationJSONImagesCreatedFrom:
    r"""GetImages200ApplicationJSONImagesCreatedFrom
    Information about the Server the Image was created from
    """
    
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetImages200ApplicationJSONImagesOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclasses.dataclass
class GetImages200ApplicationJSONImagesProtection:
    r"""GetImages200ApplicationJSONImagesProtection
    Protection configuration for the Resource
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetImages200ApplicationJSONImagesStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class GetImages200ApplicationJSONImagesTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclasses.dataclass
class GetImages200ApplicationJSONImages:
    bound_to: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bound_to') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    created_from: GetImages200ApplicationJSONImagesCreatedFrom = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_from') }})
    deleted: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deprecated: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_size') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_size') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_flavor: GetImages200ApplicationJSONImagesOsFlavorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_flavor') }})
    os_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    protection: GetImages200ApplicationJSONImagesProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    status: GetImages200ApplicationJSONImagesStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: GetImages200ApplicationJSONImagesTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    build_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_id') }})
    rapid_deploy: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rapid_deploy') }})
    

@dataclass_json
@dataclasses.dataclass
class GetImages200ApplicationJSONMetaPagination:
    last_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclasses.dataclass
class GetImages200ApplicationJSONMeta:
    pagination: GetImages200ApplicationJSONMetaPagination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclasses.dataclass
class GetImages200ApplicationJSON:
    images: list[GetImages200ApplicationJSONImages] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    meta: Optional[GetImages200ApplicationJSONMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetImagesRequest:
    query_params: GetImagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_images_200_application_json_object: Optional[GetImages200ApplicationJSON] = dataclasses.field(default=None)
    
