import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2inspectresult as shared_googleprivacydlpv2inspectresult


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2InspectContentResponse:
    r"""GooglePrivacyDlpV2InspectContentResponse
    Results of inspecting an item.
    """
    
    result: Optional[shared_googleprivacydlpv2inspectresult.GooglePrivacyDlpV2InspectResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
