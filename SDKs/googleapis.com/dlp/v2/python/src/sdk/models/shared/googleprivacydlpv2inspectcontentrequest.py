import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2inspectconfig as shared_googleprivacydlpv2inspectconfig
from ..shared import googleprivacydlpv2contentitem as shared_googleprivacydlpv2contentitem


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2InspectContentRequest:
    r"""GooglePrivacyDlpV2InspectContentRequest
    Request to search for potentially sensitive info in a ContentItem.
    """
    
    inspect_config: Optional[shared_googleprivacydlpv2inspectconfig.GooglePrivacyDlpV2InspectConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectConfig') }})
    inspect_template_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectTemplateName') }})
    item: Optional[shared_googleprivacydlpv2contentitem.GooglePrivacyDlpV2ContentItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    
