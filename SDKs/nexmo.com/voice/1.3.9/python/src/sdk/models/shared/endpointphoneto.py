import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EndpointPhoneTo:
    r"""EndpointPhoneTo
    Connect to a Phone (PSTN) number
    """
    
    number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    dtmf_answer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dtmfAnswer') }})
    
