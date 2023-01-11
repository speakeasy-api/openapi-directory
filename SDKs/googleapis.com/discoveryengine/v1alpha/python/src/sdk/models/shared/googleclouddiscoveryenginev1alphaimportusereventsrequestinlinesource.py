import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddiscoveryenginev1alphauserevent as shared_googleclouddiscoveryenginev1alphauserevent


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource:
    r"""GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource
    The inline source for the input config for ImportUserEvents method.
    """
    
    user_events: Optional[list[shared_googleclouddiscoveryenginev1alphauserevent.GoogleCloudDiscoveryengineV1alphaUserEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEvents') }})
    
