import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2label as shared_googleappsdrivelabelsv2label


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2ListLabelsResponse:
    r"""GoogleAppsDriveLabelsV2ListLabelsResponse
    Response for listing Labels.
    """
    
    labels: Optional[list[shared_googleappsdrivelabelsv2label.GoogleAppsDriveLabelsV2Label]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
