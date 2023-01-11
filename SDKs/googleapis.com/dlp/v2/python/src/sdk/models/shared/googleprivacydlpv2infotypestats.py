import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2infotype as shared_googleprivacydlpv2infotype


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2InfoTypeStats:
    r"""GooglePrivacyDlpV2InfoTypeStats
    Statistics regarding a specific InfoType.
    """
    
    count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    info_type: Optional[shared_googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoType') }})
    
