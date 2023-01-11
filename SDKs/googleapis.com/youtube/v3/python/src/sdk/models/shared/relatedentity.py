import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entity as shared_entity


@dataclass_json
@dataclasses.dataclass
class RelatedEntity:
    entity: Optional[shared_entity.Entity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    
