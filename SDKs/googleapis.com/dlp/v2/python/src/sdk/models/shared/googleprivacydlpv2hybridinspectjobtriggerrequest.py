import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2hybridcontentitem as shared_googleprivacydlpv2hybridcontentitem


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2HybridInspectJobTriggerRequest:
    r"""GooglePrivacyDlpV2HybridInspectJobTriggerRequest
    Request to search for potentially sensitive info in a custom location.
    """
    
    hybrid_item: Optional[shared_googleprivacydlpv2hybridcontentitem.GooglePrivacyDlpV2HybridContentItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hybridItem') }})
    
