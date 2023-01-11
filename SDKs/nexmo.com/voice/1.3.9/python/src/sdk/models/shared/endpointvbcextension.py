import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EndpointVbcExtension:
    r"""EndpointVbcExtension
    Connect to a VBC extension
    """
    
    extension: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
