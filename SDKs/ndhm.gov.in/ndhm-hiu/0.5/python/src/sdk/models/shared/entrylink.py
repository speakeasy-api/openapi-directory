import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EntryLinkMediaEnum(str, Enum):
    APPLICATION_FHIR_PLUS_JSON = "application/fhir+json"


@dataclass_json
@dataclasses.dataclass
class EntryLink:
    care_context_reference: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContextReference') }})
    checksum: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    link: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    media: EntryLinkMediaEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    
