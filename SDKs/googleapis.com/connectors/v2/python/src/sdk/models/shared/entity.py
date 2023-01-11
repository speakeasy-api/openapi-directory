import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EntityInput:
    r"""EntityInput
    'Entity row'/ 'Entity' refers to a single row of an entity type.
    """
    
    fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    

@dataclass_json
@dataclasses.dataclass
class Entity:
    r"""Entity
    'Entity row'/ 'Entity' refers to a single row of an entity type.
    """
    
    fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
