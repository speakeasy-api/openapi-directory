import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1userevent as shared_googlecloudrecommendationenginev1beta1userevent


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1UserEventInlineSource:
    r"""GoogleCloudRecommendationengineV1beta1UserEventInlineSource
    The inline source for the input config for ImportUserEvents method.
    """
    
    user_events: Optional[list[shared_googlecloudrecommendationenginev1beta1userevent.GoogleCloudRecommendationengineV1beta1UserEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEvents') }})
    
