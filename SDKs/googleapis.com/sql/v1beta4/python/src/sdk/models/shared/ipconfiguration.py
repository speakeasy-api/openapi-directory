import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aclentry as shared_aclentry


@dataclass_json
@dataclasses.dataclass
class IPConfiguration:
    r"""IPConfiguration
    IP Management configuration.
    """
    
    allocated_ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocatedIpRange') }})
    authorized_networks: Optional[list[shared_aclentry.ACLEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedNetworks') }})
    enable_private_path_for_google_cloud_services: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePrivatePathForGoogleCloudServices') }})
    ipv4_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4Enabled') }})
    private_network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateNetwork') }})
    require_ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requireSsl') }})
    
