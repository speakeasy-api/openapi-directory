import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CareContextRepresentation:
    display: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    reference_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceNumber') }})
    
