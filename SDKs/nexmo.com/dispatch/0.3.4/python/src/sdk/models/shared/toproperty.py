import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ToPropertyTypeEnum(str, Enum):
    SMS = "sms"
    VIBER_SERVICE_MSG = "viber_service_msg"
    MESSENGER = "messenger"
    WHATSAPP = "whatsapp"


@dataclass_json
@dataclasses.dataclass
class ToProperty:
    type: ToPropertyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    
