import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2hybridfindingdetails as shared_googleprivacydlpv2hybridfindingdetails
from ..shared import googleprivacydlpv2contentitem as shared_googleprivacydlpv2contentitem


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2HybridContentItem:
    r"""GooglePrivacyDlpV2HybridContentItem
    An individual hybrid item to inspect. Will be stored temporarily during processing.
    """
    
    finding_details: Optional[shared_googleprivacydlpv2hybridfindingdetails.GooglePrivacyDlpV2HybridFindingDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingDetails') }})
    item: Optional[shared_googleprivacydlpv2contentitem.GooglePrivacyDlpV2ContentItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    
