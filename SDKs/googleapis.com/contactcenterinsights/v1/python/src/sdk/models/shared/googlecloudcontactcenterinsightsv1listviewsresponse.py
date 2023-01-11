import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1view as shared_googlecloudcontactcenterinsightsv1view


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1ListViewsResponse:
    r"""GoogleCloudContactcenterinsightsV1ListViewsResponse
    The response of listing views.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    views: Optional[list[shared_googlecloudcontactcenterinsightsv1view.GoogleCloudContactcenterinsightsV1View]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('views') }})
    
