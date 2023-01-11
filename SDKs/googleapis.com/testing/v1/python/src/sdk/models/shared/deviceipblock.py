import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import date_ as shared_date_

class DeviceIPBlockFormEnum(str, Enum):
    DEVICE_FORM_UNSPECIFIED = "DEVICE_FORM_UNSPECIFIED"
    VIRTUAL = "VIRTUAL"
    PHYSICAL = "PHYSICAL"
    EMULATOR = "EMULATOR"


@dataclass_json
@dataclasses.dataclass
class DeviceIPBlock:
    r"""DeviceIPBlock
    A single device IP block
    """
    
    added_date: Optional[shared_date_.Date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedDate') }})
    block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    form: Optional[DeviceIPBlockFormEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    
