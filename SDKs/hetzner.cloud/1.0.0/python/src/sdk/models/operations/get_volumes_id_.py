import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetVolumesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetVolumesID200ApplicationJSONVolumeLocation:
    r"""GetVolumesID200ApplicationJSONVolumeLocation
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
class GetVolumesID200ApplicationJSONVolumeProtection:
    r"""GetVolumesID200ApplicationJSONVolumeProtection
    Protection configuration for the Resource
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetVolumesID200ApplicationJSONVolumeStatusEnum(str, Enum):
    CREATING = "creating"
    AVAILABLE = "available"


@dataclass_json
@dataclasses.dataclass
class GetVolumesID200ApplicationJSONVolume:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    format: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    linux_device: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linux_device') }})
    location: GetVolumesID200ApplicationJSONVolumeLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: GetVolumesID200ApplicationJSONVolumeProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    server: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    status: GetVolumesID200ApplicationJSONVolumeStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetVolumesID200ApplicationJSON:
    volume: GetVolumesID200ApplicationJSONVolume = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    

@dataclasses.dataclass
class GetVolumesIDRequest:
    path_params: GetVolumesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVolumesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_volumes_id_200_application_json_object: Optional[GetVolumesID200ApplicationJSON] = dataclasses.field(default=None)
    
