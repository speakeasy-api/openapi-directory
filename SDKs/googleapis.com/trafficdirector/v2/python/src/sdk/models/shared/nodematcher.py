import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stringmatcher as shared_stringmatcher
from ..shared import structmatcher as shared_structmatcher


@dataclass_json
@dataclasses.dataclass
class NodeMatcher:
    r"""NodeMatcher
    Specifies the way to match a Node. The match follows AND semantics.
    """
    
    node_id: Optional[shared_stringmatcher.StringMatcher] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeId') }})
    node_metadatas: Optional[list[shared_structmatcher.StructMatcher]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeMetadatas') }})
    
