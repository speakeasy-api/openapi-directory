import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betalabel as shared_googleappsdrivelabelsv2betalabel


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaListLabelsResponse:
    r"""GoogleAppsDriveLabelsV2betaListLabelsResponse
    Response for listing Labels.
    """
    
    labels: Optional[list[shared_googleappsdrivelabelsv2betalabel.GoogleAppsDriveLabelsV2betaLabel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
