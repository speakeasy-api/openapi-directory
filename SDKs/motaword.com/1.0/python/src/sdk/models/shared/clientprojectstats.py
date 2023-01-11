import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientprojectstat as shared_clientprojectstat


@dataclass_json
@dataclasses.dataclass
class ClientProjectStats:
    stats: Optional[list[shared_clientprojectstat.ClientProjectStat]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
