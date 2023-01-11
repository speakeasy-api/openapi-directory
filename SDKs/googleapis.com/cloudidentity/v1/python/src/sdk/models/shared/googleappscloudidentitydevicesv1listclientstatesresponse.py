import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappscloudidentitydevicesv1clientstate as shared_googleappscloudidentitydevicesv1clientstate


@dataclass_json
@dataclasses.dataclass
class GoogleAppsCloudidentityDevicesV1ListClientStatesResponse:
    r"""GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
    Response message that is returned in ListClientStates.
    """
    
    client_states: Optional[list[shared_googleappscloudidentitydevicesv1clientstate.GoogleAppsCloudidentityDevicesV1ClientState]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientStates') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
