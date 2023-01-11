import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OmnitureSettings:
    r"""OmnitureSettings
    Omniture Integration Settings.
    """
    
    omniture_cost_data_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('omnitureCostDataEnabled') }})
    omniture_integration_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('omnitureIntegrationEnabled') }})
    
