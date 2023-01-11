import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2infotype as shared_googleprivacydlpv2infotype


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2InfoTypeLimit:
    r"""GooglePrivacyDlpV2InfoTypeLimit
    Max findings configuration per infoType, per content item or long running DlpJob.
    """
    
    info_type: Optional[shared_googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoType') }})
    max_findings: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFindings') }})
    
