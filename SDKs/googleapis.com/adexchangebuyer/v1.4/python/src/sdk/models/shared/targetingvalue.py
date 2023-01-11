import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetingvaluecreativesize as shared_targetingvaluecreativesize
from ..shared import targetingvaluedayparttargeting as shared_targetingvaluedayparttargeting
from ..shared import targetingvaluedemogagecriteria as shared_targetingvaluedemogagecriteria
from ..shared import targetingvaluedemoggendercriteria as shared_targetingvaluedemoggendercriteria
from ..shared import targetingvaluerequestplatformtargeting as shared_targetingvaluerequestplatformtargeting


@dataclass_json
@dataclasses.dataclass
class TargetingValue:
    creative_size_value: Optional[shared_targetingvaluecreativesize.TargetingValueCreativeSize] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeSizeValue') }})
    day_part_targeting_value: Optional[shared_targetingvaluedayparttargeting.TargetingValueDayPartTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayPartTargetingValue') }})
    demog_age_criteria_value: Optional[shared_targetingvaluedemogagecriteria.TargetingValueDemogAgeCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('demogAgeCriteriaValue') }})
    demog_gender_criteria_value: Optional[shared_targetingvaluedemoggendercriteria.TargetingValueDemogGenderCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('demogGenderCriteriaValue') }})
    long_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longValue') }})
    request_platform_targeting_value: Optional[shared_targetingvaluerequestplatformtargeting.TargetingValueRequestPlatformTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestPlatformTargetingValue') }})
    string_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
