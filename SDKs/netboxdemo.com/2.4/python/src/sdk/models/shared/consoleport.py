import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedconsoleserverport as shared_nestedconsoleserverport
from ..shared import nesteddevice as shared_nesteddevice


@dataclass_json
@dataclasses.dataclass
class ConsolePort:
    device: shared_nesteddevice.NestedDevice = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    connection_status: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    cs_port: Optional[shared_nestedconsoleserverport.NestedConsoleServerPort] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cs_port') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
