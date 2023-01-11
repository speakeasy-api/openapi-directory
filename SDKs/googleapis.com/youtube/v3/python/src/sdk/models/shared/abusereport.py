import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import abusetype as shared_abusetype
from ..shared import relatedentity as shared_relatedentity
from ..shared import entity as shared_entity


@dataclass_json
@dataclasses.dataclass
class AbuseReport:
    abuse_types: Optional[list[shared_abusetype.AbuseType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abuseTypes') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    related_entities: Optional[list[shared_relatedentity.RelatedEntity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntities') }})
    subject: Optional[shared_entity.Entity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    
