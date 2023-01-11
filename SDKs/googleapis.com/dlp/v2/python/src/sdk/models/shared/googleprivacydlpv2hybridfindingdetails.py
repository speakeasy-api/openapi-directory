import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2container as shared_googleprivacydlpv2container
from ..shared import googleprivacydlpv2tableoptions as shared_googleprivacydlpv2tableoptions


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2HybridFindingDetails:
    r"""GooglePrivacyDlpV2HybridFindingDetails
    Populate to associate additional data with each finding.
    """
    
    container_details: Optional[shared_googleprivacydlpv2container.GooglePrivacyDlpV2Container] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerDetails') }})
    file_offset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileOffset') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    row_offset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowOffset') }})
    table_options: Optional[shared_googleprivacydlpv2tableoptions.GooglePrivacyDlpV2TableOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableOptions') }})
    
