import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LinkedSourceDocumentSourceEnum(str, Enum):
    DROPBOX = "dropbox"
    GOOGLEDRIVE = "googledrive"
    ICLOUD = "icloud"


@dataclass_json
@dataclasses.dataclass
class LinkedSourceDocument:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    source: Optional[LinkedSourceDocumentSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
