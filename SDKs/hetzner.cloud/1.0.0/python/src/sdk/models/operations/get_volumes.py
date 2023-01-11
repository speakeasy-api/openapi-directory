import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetVolumesSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"

class GetVolumesStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"


@dataclasses.dataclass
class GetVolumesQueryParams:
    label_selector: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetVolumesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[GetVolumesStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetVolumes200ApplicationJSONMetaPagination:
    last_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclasses.dataclass
class GetVolumes200ApplicationJSONMeta:
    pagination: GetVolumes200ApplicationJSONMetaPagination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclasses.dataclass
class GetVolumes200ApplicationJSONVolumesLocation:
    r"""GetVolumes200ApplicationJSONVolumesLocation
    Location of the Volume. Volume can only be attached to Servers in the same Location.
    """
    
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    

@dataclass_json
@dataclasses.dataclass
class GetVolumes200ApplicationJSONVolumesProtection:
    r"""GetVolumes200ApplicationJSONVolumesProtection
    Protection configuration for the Resource
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetVolumes200ApplicationJSONVolumesStatusEnum(str, Enum):
    CREATING = "creating"
    AVAILABLE = "available"


@dataclass_json
@dataclasses.dataclass
class GetVolumes200ApplicationJSONVolumes:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    format: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linux_device: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linux_device') }})
    location: GetVolumes200ApplicationJSONVolumesLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: GetVolumes200ApplicationJSONVolumesProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    server: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    status: GetVolumes200ApplicationJSONVolumesStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetVolumes200ApplicationJSON:
    volumes: list[GetVolumes200ApplicationJSONVolumes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    meta: Optional[GetVolumes200ApplicationJSONMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetVolumesRequest:
    query_params: GetVolumesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVolumesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_volumes_200_application_json_object: Optional[GetVolumes200ApplicationJSON] = dataclasses.field(default=None)
    
