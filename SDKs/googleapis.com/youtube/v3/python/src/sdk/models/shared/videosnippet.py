import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videolocalization as shared_videolocalization
from ..shared import thumbnaildetails as shared_thumbnaildetails

class VideoSnippetLiveBroadcastContentEnum(str, Enum):
    NONE = "none"
    UPCOMING = "upcoming"
    LIVE = "live"
    COMPLETED = "completed"


@dataclass_json
@dataclasses.dataclass
class VideoSnippet:
    r"""VideoSnippet
    Basic details about a video, including title, description, uploader, thumbnails and category.
    """
    
    category_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    channel_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTitle') }})
    default_audio_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAudioLanguage') }})
    default_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLanguage') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    live_broadcast_content: Optional[VideoSnippetLiveBroadcastContentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveBroadcastContent') }})
    localized: Optional[shared_videolocalization.VideoLocalization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localized') }})
    published_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thumbnails: Optional[shared_thumbnaildetails.ThumbnailDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnails') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
