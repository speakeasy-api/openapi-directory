from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EndpointPhoneFrom:
    r"""EndpointPhoneFrom
    Connect to a Phone (PSTN) number
    """
    
    number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
