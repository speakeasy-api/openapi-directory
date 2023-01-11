import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2service as shared_googlecloudrunv2service


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2ListServicesResponse:
    r"""GoogleCloudRunV2ListServicesResponse
    Response message containing a list of Services.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    services: Optional[list[shared_googlecloudrunv2service.GoogleCloudRunV2Service]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    
