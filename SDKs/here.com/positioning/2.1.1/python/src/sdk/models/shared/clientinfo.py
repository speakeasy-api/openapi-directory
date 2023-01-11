import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ClientInfo:
    r"""ClientInfo
    Information about the client
    """
    
    manufacturer: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    firmware: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firmware') }})
    platform: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    
