import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ResourceRecordTypeEnum(str, Enum):
    RECORD_TYPE_UNSPECIFIED = "RECORD_TYPE_UNSPECIFIED"
    A = "A"
    AAAA = "AAAA"
    CNAME = "CNAME"


@dataclass_json
@dataclasses.dataclass
class ResourceRecord:
    r"""ResourceRecord
    A DNS resource record.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rrdata: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rrdata') }})
    type: Optional[ResourceRecordTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
