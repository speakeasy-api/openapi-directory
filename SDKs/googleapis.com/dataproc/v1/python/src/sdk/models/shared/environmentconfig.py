import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import executionconfig as shared_executionconfig
from ..shared import peripheralsconfig as shared_peripheralsconfig


@dataclass_json
@dataclasses.dataclass
class EnvironmentConfig:
    r"""EnvironmentConfig
    Environment configuration for a workload.
    """
    
    execution_config: Optional[shared_executionconfig.ExecutionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionConfig') }})
    peripherals_config: Optional[shared_peripheralsconfig.PeripheralsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peripheralsConfig') }})
    
