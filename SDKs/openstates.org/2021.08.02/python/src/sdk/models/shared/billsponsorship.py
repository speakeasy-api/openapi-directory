import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compactperson as shared_compactperson


@dataclass_json
@dataclasses.dataclass
class BillSponsorshipOrganization:
    classification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class BillSponsorship:
    classification: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    entity_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity_type') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    primary: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    organization: Optional[BillSponsorshipOrganization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    person: Optional[shared_compactperson.CompactPerson] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    
