import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appdevexperiencefeaturestate as shared_appdevexperiencefeaturestate
from ..shared import featurestate as shared_featurestate


@dataclass_json
@dataclasses.dataclass
class CommonFeatureState1:
    r"""CommonFeatureState1
    CommonFeatureState contains Hub-wide Feature status information.
    """
    
    appdevexperience: Optional[shared_appdevexperiencefeaturestate.AppDevExperienceFeatureState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appdevexperience') }})
    fleetobservability: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetobservability') }})
    state: Optional[shared_featurestate.FeatureState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
