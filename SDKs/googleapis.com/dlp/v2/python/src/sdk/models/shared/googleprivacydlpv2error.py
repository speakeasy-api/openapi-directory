import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlerpcstatus as shared_googlerpcstatus


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2Error:
    r"""GooglePrivacyDlpV2Error
    Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger.
    """
    
    details: Optional[shared_googlerpcstatus.GoogleRPCStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    timestamps: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamps') }})
    
