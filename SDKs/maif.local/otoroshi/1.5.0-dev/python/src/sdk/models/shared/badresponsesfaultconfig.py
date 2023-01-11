import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import badresponse as shared_badresponse


@dataclass_json
@dataclasses.dataclass
class BadResponsesFaultConfig:
    r"""BadResponsesFaultConfig
    Config for bad requests injection fault
    """
    
    ratio: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratio') }})
    responses: list[shared_badresponse.BadResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
