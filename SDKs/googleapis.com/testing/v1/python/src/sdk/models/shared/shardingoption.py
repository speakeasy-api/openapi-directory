import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import manualsharding as shared_manualsharding
from ..shared import uniformsharding as shared_uniformsharding


@dataclass_json
@dataclasses.dataclass
class ShardingOption:
    r"""ShardingOption
    Options for enabling sharding.
    """
    
    manual_sharding: Optional[shared_manualsharding.ManualSharding] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualSharding') }})
    uniform_sharding: Optional[shared_uniformsharding.UniformSharding] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniformSharding') }})
    
