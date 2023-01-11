import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import machineconfig as shared_machineconfig


@dataclass_json
@dataclasses.dataclass
class PrimaryInstanceSettings:
    r"""PrimaryInstanceSettings
    Settings for the cluster's primary instance
    """
    
    database_flags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseFlags') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    machine_config: Optional[shared_machineconfig.MachineConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineConfig') }})
    private_ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateIp') }})
    

@dataclass_json
@dataclasses.dataclass
class PrimaryInstanceSettingsInput:
    r"""PrimaryInstanceSettingsInput
    Settings for the cluster's primary instance
    """
    
    database_flags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseFlags') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    machine_config: Optional[shared_machineconfig.MachineConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineConfig') }})
    
