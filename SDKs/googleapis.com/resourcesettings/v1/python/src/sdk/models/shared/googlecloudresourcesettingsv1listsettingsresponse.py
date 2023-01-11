import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudresourcesettingsv1setting as shared_googlecloudresourcesettingsv1setting


@dataclass_json
@dataclasses.dataclass
class GoogleCloudResourcesettingsV1ListSettingsResponse:
    r"""GoogleCloudResourcesettingsV1ListSettingsResponse
    The response from ListSettings.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    settings: Optional[list[shared_googlecloudresourcesettingsv1setting.GoogleCloudResourcesettingsV1Setting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
