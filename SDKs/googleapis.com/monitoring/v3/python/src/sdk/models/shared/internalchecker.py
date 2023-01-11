import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InternalCheckerStateEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    CREATING = "CREATING"
    RUNNING = "RUNNING"


@dataclass_json
@dataclasses.dataclass
class InternalChecker:
    r"""InternalChecker
    An internal checker allows Uptime checks to run on private/internal GCP resources.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gcp_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcpZone') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    peer_project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peerProjectId') }})
    state: Optional[InternalCheckerStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
