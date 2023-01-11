import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import servicemeshstatusdetails as shared_servicemeshstatusdetails

class ServiceMeshControlPlaneManagementStateEnum(str, Enum):
    LIFECYCLE_STATE_UNSPECIFIED = "LIFECYCLE_STATE_UNSPECIFIED"
    DISABLED = "DISABLED"
    FAILED_PRECONDITION = "FAILED_PRECONDITION"
    PROVISIONING = "PROVISIONING"
    ACTIVE = "ACTIVE"
    STALLED = "STALLED"
    NEEDS_ATTENTION = "NEEDS_ATTENTION"
    DEGRADED = "DEGRADED"


@dataclass_json
@dataclasses.dataclass
class ServiceMeshControlPlaneManagement:
    r"""ServiceMeshControlPlaneManagement
    Status of control plane management.
    """
    
    details: Optional[list[shared_servicemeshstatusdetails.ServiceMeshStatusDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    state: Optional[ServiceMeshControlPlaneManagementStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
