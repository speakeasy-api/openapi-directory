import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2tableoptions as shared_googleprivacydlpv2tableoptions


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2HybridOptions:
    r"""GooglePrivacyDlpV2HybridOptions
    Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    required_finding_label_keys: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredFindingLabelKeys') }})
    table_options: Optional[shared_googleprivacydlpv2tableoptions.GooglePrivacyDlpV2TableOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableOptions') }})
    
