import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import node as shared_node


@dataclass_json
@dataclasses.dataclass
class TypedNode:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    taxon: Optional[shared_node.Node] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxon') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
