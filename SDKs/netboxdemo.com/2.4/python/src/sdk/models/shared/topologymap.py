import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedsite as shared_nestedsite


@dataclass_json
@dataclasses.dataclass
class TopologyMap:
    device_patterns: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_patterns') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site: shared_nestedsite.NestedSite = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    slug: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
