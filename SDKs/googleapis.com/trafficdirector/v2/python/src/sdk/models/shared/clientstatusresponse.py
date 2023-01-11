import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientconfig as shared_clientconfig


@dataclass_json
@dataclasses.dataclass
class ClientStatusResponse:
    config: Optional[list[shared_clientconfig.ClientConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    
