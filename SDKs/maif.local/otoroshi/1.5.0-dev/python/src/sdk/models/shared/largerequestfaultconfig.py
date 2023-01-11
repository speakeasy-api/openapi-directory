import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LargeRequestFaultConfig:
    r"""LargeRequestFaultConfig
    Config for large request injection fault
    """
    
    additional_request_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalRequestSize') }})
    ratio: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratio') }})
    
