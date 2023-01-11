import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2deidentifytemplate as shared_googleprivacydlpv2deidentifytemplate


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput:
    r"""GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput
    Request message for CreateDeidentifyTemplate.
    """
    
    deidentify_template: Optional[shared_googleprivacydlpv2deidentifytemplate.GooglePrivacyDlpV2DeidentifyTemplateInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentifyTemplate') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateId') }})
    
