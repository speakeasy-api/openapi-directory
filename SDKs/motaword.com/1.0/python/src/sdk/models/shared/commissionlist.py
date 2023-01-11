import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import commission as shared_commission
from ..shared import pagingmeta as shared_pagingmeta


@dataclass_json
@dataclasses.dataclass
class CommissionList:
    commissions: Optional[list[shared_commission.Commission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commissions') }})
    meta: Optional[shared_pagingmeta.PagingMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
