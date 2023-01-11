import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EntryContentMediaEnum(str, Enum):
    APPLICATION_FHIR_PLUS_JSON = "application/fhir+json"


@dataclass_json
@dataclasses.dataclass
class EntryContent:
    care_context_reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContextReference') }})
    checksum: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    media: EntryContentMediaEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    
