import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicemetadata as shared_devicemetadata


@dataclass_json
@dataclasses.dataclass
class UpdateDeviceMetadataRequest:
    r"""UpdateDeviceMetadataRequest
    Request to set metadata for a device.
    """
    
    device_metadata: Optional[shared_devicemetadata.DeviceMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMetadata') }})
    
