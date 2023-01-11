import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2deidentifyconfig as shared_googleprivacydlpv2deidentifyconfig
from ..shared import googleprivacydlpv2inspectconfig as shared_googleprivacydlpv2inspectconfig
from ..shared import googleprivacydlpv2contentitem as shared_googleprivacydlpv2contentitem


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2DeidentifyContentRequest:
    r"""GooglePrivacyDlpV2DeidentifyContentRequest
    Request to de-identify a ContentItem.
    """
    
    deidentify_config: Optional[shared_googleprivacydlpv2deidentifyconfig.GooglePrivacyDlpV2DeidentifyConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentifyConfig') }})
    deidentify_template_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentifyTemplateName') }})
    inspect_config: Optional[shared_googleprivacydlpv2inspectconfig.GooglePrivacyDlpV2InspectConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectConfig') }})
    inspect_template_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectTemplateName') }})
    item: Optional[shared_googleprivacydlpv2contentitem.GooglePrivacyDlpV2ContentItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    
