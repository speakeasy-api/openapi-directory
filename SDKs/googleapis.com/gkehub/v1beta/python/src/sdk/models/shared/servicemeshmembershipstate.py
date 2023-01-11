import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicemeshcontrolplanemanagement as shared_servicemeshcontrolplanemanagement
from ..shared import servicemeshdataplanemanagement as shared_servicemeshdataplanemanagement


@dataclass_json
@dataclasses.dataclass
class ServiceMeshMembershipState:
    r"""ServiceMeshMembershipState
    **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller.
    """
    
    control_plane_management: Optional[shared_servicemeshcontrolplanemanagement.ServiceMeshControlPlaneManagement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlPlaneManagement') }})
    data_plane_management: Optional[shared_servicemeshdataplanemanagement.ServiceMeshDataPlaneManagement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPlaneManagement') }})
    
