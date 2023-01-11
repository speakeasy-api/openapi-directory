import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activity as shared_activity
from ..shared import pagingmeta as shared_pagingmeta


@dataclass_json
@dataclasses.dataclass
class ActivityList:
    activities: Optional[list[shared_activity.Activity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    meta: Optional[shared_pagingmeta.PagingMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
