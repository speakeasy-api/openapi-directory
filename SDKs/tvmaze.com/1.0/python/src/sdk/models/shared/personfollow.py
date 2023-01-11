import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PersonFollowEmbedded:
    person: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    

@dataclass_json
@dataclasses.dataclass
class PersonFollow:
    embedded: Optional[PersonFollowEmbedded] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    person_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person_id') }})
    
