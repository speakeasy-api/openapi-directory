import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaIntegerLimits:
    r"""GoogleAppsDriveLabelsV2betaIntegerLimits
    Limits for integer Field type.
    """
    
    max_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    
