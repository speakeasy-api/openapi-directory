import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1betauserevent as shared_googleclouddiscoveryenginev1betauserevent


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource:
    r"""GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource
    The inline source for the input config for ImportUserEvents method.
    """
    
    user_events: Optional[list[shared_googleclouddiscoveryenginev1betauserevent.GoogleCloudDiscoveryengineV1betaUserEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEvents') }})
    
