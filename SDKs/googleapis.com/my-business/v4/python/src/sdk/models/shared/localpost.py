import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import calltoaction as shared_calltoaction
from ..shared import localpostevent as shared_localpostevent
from ..shared import mediaitem as shared_mediaitem
from ..shared import localpostoffer as shared_localpostoffer

class LocalPostAlertTypeEnum(str, Enum):
    ALERT_TYPE_UNSPECIFIED = "ALERT_TYPE_UNSPECIFIED"
    COVID_19 = "COVID_19"

class LocalPostStateEnum(str, Enum):
    LOCAL_POST_STATE_UNSPECIFIED = "LOCAL_POST_STATE_UNSPECIFIED"
    REJECTED = "REJECTED"
    LIVE = "LIVE"
    PROCESSING = "PROCESSING"

class LocalPostTopicTypeEnum(str, Enum):
    LOCAL_POST_TOPIC_TYPE_UNSPECIFIED = "LOCAL_POST_TOPIC_TYPE_UNSPECIFIED"
    STANDARD = "STANDARD"
    EVENT = "EVENT"
    OFFER = "OFFER"
    ALERT = "ALERT"


@dataclass_json
@dataclasses.dataclass
class LocalPost:
    r"""LocalPost
    Represents a [local post](https://support.google.com/business/answer/7662907) for a location.
    """
    
    alert_type: Optional[LocalPostAlertTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertType') }})
    call_to_action: Optional[shared_calltoaction.CallToAction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callToAction') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    event: Optional[shared_localpostevent.LocalPostEvent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    media: Optional[list[shared_mediaitem.MediaItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    offer: Optional[shared_localpostoffer.LocalPostOffer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offer') }})
    search_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchUrl') }})
    state: Optional[LocalPostStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    summary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    topic_type: Optional[LocalPostTopicTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicType') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
