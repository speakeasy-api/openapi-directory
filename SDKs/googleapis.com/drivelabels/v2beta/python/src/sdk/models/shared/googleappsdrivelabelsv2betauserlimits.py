import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betalistlimits as shared_googleappsdrivelabelsv2betalistlimits


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaUserLimits:
    r"""GoogleAppsDriveLabelsV2betaUserLimits
    Limits for Field.Type.USER.
    """
    
    list_limits: Optional[shared_googleappsdrivelabelsv2betalistlimits.GoogleAppsDriveLabelsV2betaListLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listLimits') }})
    
