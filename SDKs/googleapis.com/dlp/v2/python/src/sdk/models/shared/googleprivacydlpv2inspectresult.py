import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2finding as shared_googleprivacydlpv2finding


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2InspectResult:
    r"""GooglePrivacyDlpV2InspectResult
    All the findings for a single scanned item.
    """
    
    findings: Optional[list[shared_googleprivacydlpv2finding.GooglePrivacyDlpV2Finding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    findings_truncated: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingsTruncated') }})
    
