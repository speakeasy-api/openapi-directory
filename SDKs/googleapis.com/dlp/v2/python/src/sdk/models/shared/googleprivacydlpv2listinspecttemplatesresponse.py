import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2inspecttemplate as shared_googleprivacydlpv2inspecttemplate


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ListInspectTemplatesResponse:
    r"""GooglePrivacyDlpV2ListInspectTemplatesResponse
    Response message for ListInspectTemplates.
    """
    
    inspect_templates: Optional[list[shared_googleprivacydlpv2inspecttemplate.GooglePrivacyDlpV2InspectTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectTemplates') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
