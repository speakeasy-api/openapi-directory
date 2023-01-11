import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reusableconfigvalues as shared_reusableconfigvalues


@dataclass_json
@dataclasses.dataclass
class ReusableConfigWrapper:
    r"""ReusableConfigWrapper
    A ReusableConfigWrapper describes values that may assist in creating an X.509 certificate, or a reference to a pre-defined set of values.
    """
    
    reusable_config: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reusableConfig') }})
    reusable_config_values: Optional[shared_reusableconfigvalues.ReusableConfigValues] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reusableConfigValues') }})
    
