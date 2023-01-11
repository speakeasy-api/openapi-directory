import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2inspecttemplate as shared_googleprivacydlpv2inspecttemplate


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2CreateInspectTemplateRequestInput:
    r"""GooglePrivacyDlpV2CreateInspectTemplateRequestInput
    Request message for CreateInspectTemplate.
    """
    
    inspect_template: Optional[shared_googleprivacydlpv2inspecttemplate.GooglePrivacyDlpV2InspectTemplateInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectTemplate') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateId') }})
    
