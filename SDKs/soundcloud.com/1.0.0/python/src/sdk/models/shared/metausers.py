import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metauser as shared_metauser


@dataclass_json
@dataclasses.dataclass
class MetaUsers:
    collection: Optional[list[shared_metauser.MetaUser]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    next_href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_href') }})
    
