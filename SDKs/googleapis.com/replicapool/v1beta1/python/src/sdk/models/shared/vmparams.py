import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import existingdisk as shared_existingdisk
from ..shared import newdisk as shared_newdisk
from ..shared import metadata as shared_metadata
from ..shared import networkinterface as shared_networkinterface
from ..shared import serviceaccount as shared_serviceaccount
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class VMParams:
    r"""VMParams
    Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.
    """
    
    base_instance_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseInstanceName') }})
    can_ip_forward: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canIpForward') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disks_to_attach: Optional[list[shared_existingdisk.ExistingDisk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disksToAttach') }})
    disks_to_create: Optional[list[shared_newdisk.NewDisk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disksToCreate') }})
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    metadata: Optional[shared_metadata.Metadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network_interfaces: Optional[list[shared_networkinterface.NetworkInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    on_host_maintenance: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onHostMaintenance') }})
    service_accounts: Optional[list[shared_serviceaccount.ServiceAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccounts') }})
    tags: Optional[shared_tag.Tag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
