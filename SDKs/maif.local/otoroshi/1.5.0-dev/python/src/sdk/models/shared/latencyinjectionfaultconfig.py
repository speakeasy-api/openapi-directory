import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LatencyInjectionFaultConfig:
    r"""LatencyInjectionFaultConfig
    Config for large latency injection fault
    """
    
    from_: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    ratio: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratio') }})
    to: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
