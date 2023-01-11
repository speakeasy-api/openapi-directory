import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatemetadataarguments as shared_updatemetadataarguments


@dataclass_json
@dataclasses.dataclass
class UpdateDeviceMetadataInBatchRequest:
    r"""UpdateDeviceMetadataInBatchRequest
    Request to update device metadata in batch.
    """
    
    updates: Optional[list[shared_updatemetadataarguments.UpdateMetadataArguments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updates') }})
    
