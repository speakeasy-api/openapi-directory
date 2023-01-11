import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VoidLabelResponseBody:
    r"""VoidLabelResponseBody
    A void label response body
    """
    
    approved: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
