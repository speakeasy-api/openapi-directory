import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RPCRequest:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    jsonrpc: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonrpc') }})
    method: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    params: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    
