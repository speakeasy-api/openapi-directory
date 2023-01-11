import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import node as shared_node
from ..shared import typednode as shared_typednode


@dataclass_json
@dataclasses.dataclass
class SimQuery:
    ids: Optional[list[shared_node.Node]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    negated_ids: Optional[list[shared_node.Node]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negated_ids') }})
    reference: Optional[shared_typednode.TypedNode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    target_ids: Optional[list[list[shared_node.Node]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_ids') }})
    unresolved_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unresolved_ids') }})
    
