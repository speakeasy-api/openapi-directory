import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceidentifier as shared_deviceidentifier
from ..shared import devicemetadata as shared_devicemetadata


@dataclass_json
@dataclasses.dataclass
class UpdateMetadataArguments:
    r"""UpdateMetadataArguments
    Identifies metadata updates to one device.
    """
    
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    device_identifier: Optional[shared_deviceidentifier.DeviceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIdentifier') }})
    device_metadata: Optional[shared_devicemetadata.DeviceMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMetadata') }})
    
