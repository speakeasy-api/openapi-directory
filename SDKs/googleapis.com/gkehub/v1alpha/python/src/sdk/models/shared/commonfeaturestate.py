import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appdevexperiencefeaturestate as shared_appdevexperiencefeaturestate
from ..shared import servicemeshfeaturestate as shared_servicemeshfeaturestate
from ..shared import featurestate as shared_featurestate


@dataclass_json
@dataclasses.dataclass
class CommonFeatureState:
    r"""CommonFeatureState
    CommonFeatureState contains Hub-wide Feature status information.
    """
    
    appdevexperience: Optional[shared_appdevexperiencefeaturestate.AppDevExperienceFeatureState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appdevexperience') }})
    fleetobservability: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetobservability') }})
    servicemesh: Optional[shared_servicemeshfeaturestate.ServiceMeshFeatureState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicemesh') }})
    state: Optional[shared_featurestate.FeatureState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
