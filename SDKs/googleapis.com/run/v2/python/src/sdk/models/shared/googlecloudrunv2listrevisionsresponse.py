import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2revision as shared_googlecloudrunv2revision


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2ListRevisionsResponse:
    r"""GoogleCloudRunV2ListRevisionsResponse
    Response message containing a list of Revisions.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    revisions: Optional[list[shared_googlecloudrunv2revision.GoogleCloudRunV2Revision]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisions') }})
    
