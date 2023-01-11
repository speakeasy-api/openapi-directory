import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Outage:
    r"""Outage
    An outage by the Snow Monkey on a service
    """
    
    descriptor_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptorId') }})
    descriptor_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptorName') }})
    duration: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    until: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('until') }})
    
