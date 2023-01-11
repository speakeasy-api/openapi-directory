import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import floodlightconfiguration as shared_floodlightconfiguration


@dataclass_json
@dataclasses.dataclass
class FloodlightConfigurationsListResponse:
    r"""FloodlightConfigurationsListResponse
    Floodlight Configuration List Response
    """
    
    floodlight_configurations: Optional[list[shared_floodlightconfiguration.FloodlightConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightConfigurations') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
