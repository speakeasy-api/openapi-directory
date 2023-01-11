import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceconfig as shared_instanceconfig
from ..shared import networkconfig as shared_networkconfig
from ..shared import volumeconfig as shared_volumeconfig


@dataclass_json
@dataclasses.dataclass
class ProvisioningConfig:
    r"""ProvisioningConfig
    An provisioning configuration.
    """
    
    instances: Optional[list[shared_instanceconfig.InstanceConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    networks: Optional[list[shared_networkconfig.NetworkConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    ticket_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticketId') }})
    volumes: Optional[list[shared_volumeconfig.VolumeConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
