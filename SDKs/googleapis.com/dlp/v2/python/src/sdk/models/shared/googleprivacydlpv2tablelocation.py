import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2TableLocation:
    r"""GooglePrivacyDlpV2TableLocation
    Location of a finding within a table.
    """
    
    row_index: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowIndex') }})
    
