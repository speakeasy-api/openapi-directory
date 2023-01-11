import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2infotypelimit as shared_googleprivacydlpv2infotypelimit


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2FindingLimits:
    r"""GooglePrivacyDlpV2FindingLimits
    Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error.
    """
    
    max_findings_per_info_type: Optional[list[shared_googleprivacydlpv2infotypelimit.GooglePrivacyDlpV2InfoTypeLimit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFindingsPerInfoType') }})
    max_findings_per_item: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFindingsPerItem') }})
    max_findings_per_request: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFindingsPerRequest') }})
    
