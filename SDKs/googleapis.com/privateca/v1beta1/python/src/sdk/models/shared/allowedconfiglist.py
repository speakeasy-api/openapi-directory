import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reusableconfigwrapper as shared_reusableconfigwrapper


@dataclass_json
@dataclasses.dataclass
class AllowedConfigList:
    allowed_config_values: Optional[list[shared_reusableconfigwrapper.ReusableConfigWrapper]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedConfigValues') }})
    
