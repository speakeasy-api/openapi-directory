import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2contentitem as shared_googleprivacydlpv2contentitem
from ..shared import googleprivacydlpv2transformationoverview as shared_googleprivacydlpv2transformationoverview


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2DeidentifyContentResponse:
    r"""GooglePrivacyDlpV2DeidentifyContentResponse
    Results of de-identifying a ContentItem.
    """
    
    item: Optional[shared_googleprivacydlpv2contentitem.GooglePrivacyDlpV2ContentItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    overview: Optional[shared_googleprivacydlpv2transformationoverview.GooglePrivacyDlpV2TransformationOverview] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overview') }})
    
