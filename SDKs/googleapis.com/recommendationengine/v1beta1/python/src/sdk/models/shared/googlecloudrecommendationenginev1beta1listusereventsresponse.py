import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1userevent as shared_googlecloudrecommendationenginev1beta1userevent


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1ListUserEventsResponse:
    r"""GoogleCloudRecommendationengineV1beta1ListUserEventsResponse
    Response message for ListUserEvents method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    user_events: Optional[list[shared_googlecloudrecommendationenginev1beta1userevent.GoogleCloudRecommendationengineV1beta1UserEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEvents') }})
    
