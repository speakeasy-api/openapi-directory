import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nestedrackgroup as shared_nestedrackgroup
from ..shared import nestedsite as shared_nestedsite


@dataclass_json
@dataclasses.dataclass
class PowerPanel:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site: shared_nestedsite.NestedSite = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    powerfeed_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerfeed_count') }})
    rack_group: Optional[shared_nestedrackgroup.NestedRackGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rack_group') }})
    
