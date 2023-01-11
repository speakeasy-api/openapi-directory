import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Net:
    ethernet_connected: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethernet_connected') }})
    ip_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }})
    online: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('online') }})
    
