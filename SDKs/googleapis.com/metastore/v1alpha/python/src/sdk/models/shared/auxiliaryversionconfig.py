import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkconfig as shared_networkconfig
from ..shared import networkconfig as shared_networkconfig


@dataclass_json
@dataclasses.dataclass
class AuxiliaryVersionConfig:
    config_overrides: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configOverrides') }})
    network_config: Optional[shared_networkconfig.NetworkConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class AuxiliaryVersionConfigInput:
    config_overrides: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configOverrides') }})
    network_config: Optional[shared_networkconfig.NetworkConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
