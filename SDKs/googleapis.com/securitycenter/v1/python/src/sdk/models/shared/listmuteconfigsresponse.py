import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudsecuritycenterv1muteconfig as shared_googlecloudsecuritycenterv1muteconfig


@dataclass_json
@dataclasses.dataclass
class ListMuteConfigsResponse:
    r"""ListMuteConfigsResponse
    Response message for listing mute configs.
    """
    
    mute_configs: Optional[list[shared_googlecloudsecuritycenterv1muteconfig.GoogleCloudSecuritycenterV1MuteConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('muteConfigs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
