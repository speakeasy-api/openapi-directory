import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommendationenginev1beta1eventdetail as shared_googlecloudrecommendationenginev1beta1eventdetail
from ..shared import googlecloudrecommendationenginev1beta1producteventdetail as shared_googlecloudrecommendationenginev1beta1producteventdetail
from ..shared import googlecloudrecommendationenginev1beta1userinfo as shared_googlecloudrecommendationenginev1beta1userinfo

class GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum(str, Enum):
    EVENT_SOURCE_UNSPECIFIED = "EVENT_SOURCE_UNSPECIFIED"
    AUTOML = "AUTOML"
    ECOMMERCE = "ECOMMERCE"
    BATCH_UPLOAD = "BATCH_UPLOAD"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommendationengineV1beta1UserEvent:
    r"""GoogleCloudRecommendationengineV1beta1UserEvent
    UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website.
    """
    
    event_detail: Optional[shared_googlecloudrecommendationenginev1beta1eventdetail.GoogleCloudRecommendationengineV1beta1EventDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDetail') }})
    event_source: Optional[GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSource') }})
    event_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    event_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    product_event_detail: Optional[shared_googlecloudrecommendationenginev1beta1producteventdetail.GoogleCloudRecommendationengineV1beta1ProductEventDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productEventDetail') }})
    user_info: Optional[shared_googlecloudrecommendationenginev1beta1userinfo.GoogleCloudRecommendationengineV1beta1UserInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    
