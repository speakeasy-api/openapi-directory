import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apicounterv2out as shared_apicounterv2out


@dataclass_json
@dataclasses.dataclass
class APIUsageHistoryOut:
    detailed_usage: Optional[list[shared_apicounterv2out.APICounterV2Out]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailedUsage') }})
    
