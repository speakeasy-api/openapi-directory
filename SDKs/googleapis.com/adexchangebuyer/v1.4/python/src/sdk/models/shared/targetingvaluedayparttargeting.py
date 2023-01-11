import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetingvaluedayparttargetingdaypart as shared_targetingvaluedayparttargetingdaypart


@dataclass_json
@dataclasses.dataclass
class TargetingValueDayPartTargeting:
    day_parts: Optional[list[shared_targetingvaluedayparttargetingdaypart.TargetingValueDayPartTargetingDayPart]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayParts') }})
    time_zone_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZoneType') }})
    
