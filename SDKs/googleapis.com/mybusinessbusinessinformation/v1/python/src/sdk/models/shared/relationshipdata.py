import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relevantlocation as shared_relevantlocation


@dataclass_json
@dataclasses.dataclass
class RelationshipData:
    r"""RelationshipData
    Information of all parent and children locations related to this one.
    """
    
    children_locations: Optional[list[shared_relevantlocation.RelevantLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('childrenLocations') }})
    parent_chain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentChain') }})
    parent_location: Optional[shared_relevantlocation.RelevantLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentLocation') }})
    
