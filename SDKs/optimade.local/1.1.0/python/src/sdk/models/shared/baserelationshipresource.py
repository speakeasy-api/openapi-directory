import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BaseRelationshipResourceBaseRelationshipMeta:
    r"""BaseRelationshipResourceBaseRelationshipMeta
    Specific meta field for base relationship resource
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclasses.dataclass
class BaseRelationshipResource:
    r"""BaseRelationshipResource
    Minimum requirements to represent a relationship resource
    """
    
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    meta: Optional[BaseRelationshipResourceBaseRelationshipMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
