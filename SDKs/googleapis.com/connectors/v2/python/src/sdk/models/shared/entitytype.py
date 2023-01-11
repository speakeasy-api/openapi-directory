import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import field as shared_field


@dataclass_json
@dataclasses.dataclass
class EntityType:
    r"""EntityType
    EntityType message contains metadata information about a single entity type present in the external system.
    """
    
    fields: Optional[list[shared_field.Field]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
