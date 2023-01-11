import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CombinedAudienceTargetingSetting:
    r"""CombinedAudienceTargetingSetting
    Details of combined audience targeting setting.
    """
    
    combined_audience_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combinedAudienceId') }})
    
