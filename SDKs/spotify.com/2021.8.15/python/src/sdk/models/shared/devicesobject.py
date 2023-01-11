import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceobject as shared_deviceobject


@dataclass_json
@dataclasses.dataclass
class DevicesObject:
    r"""DevicesObject

    https://developer.spotify.com/documentation/web-api/reference/#object-devicesobject - Find more info on the official Spotify Web API Reference
    """
    
    devices: Optional[list[shared_deviceobject.DeviceObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    
