import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import edge as shared_edge
from ..shared import node as shared_node


@dataclass_json
@dataclasses.dataclass
class Graph:
    edges: Optional[list[shared_edge.Edge]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edges') }})
    nodes: Optional[list[shared_node.Node]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
