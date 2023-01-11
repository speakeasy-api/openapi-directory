import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2deidentifytemplate as shared_googleprivacydlpv2deidentifytemplate


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ListDeidentifyTemplatesResponse:
    r"""GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
    Response message for ListDeidentifyTemplates.
    """
    
    deidentify_templates: Optional[list[shared_googleprivacydlpv2deidentifytemplate.GooglePrivacyDlpV2DeidentifyTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentifyTemplates') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
