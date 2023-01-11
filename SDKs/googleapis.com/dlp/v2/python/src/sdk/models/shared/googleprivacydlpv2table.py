import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid
from ..shared import googleprivacydlpv2row as shared_googleprivacydlpv2row


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2Table:
    r"""GooglePrivacyDlpV2Table
    Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/dlp/docs/inspecting-structured-text#inspecting_a_table to learn more.
    """
    
    headers: Optional[list[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    rows: Optional[list[shared_googleprivacydlpv2row.GooglePrivacyDlpV2Row]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
