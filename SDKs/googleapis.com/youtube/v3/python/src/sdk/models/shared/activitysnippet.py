import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thumbnaildetails as shared_thumbnaildetails

class ActivitySnippetTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "typeUnspecified"
    UPLOAD = "upload"
    LIKE = "like"
    FAVORITE = "favorite"
    COMMENT = "comment"
    SUBSCRIPTION = "subscription"
    PLAYLIST_ITEM = "playlistItem"
    RECOMMENDATION = "recommendation"
    BULLETIN = "bulletin"
    SOCIAL = "social"
    CHANNEL_ITEM = "channelItem"
    PROMOTED_ITEM = "promotedItem"


@dataclass_json
@dataclasses.dataclass
class ActivitySnippet:
    r"""ActivitySnippet
    Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12
    """
    
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    channel_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTitle') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    published_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    thumbnails: Optional[shared_thumbnaildetails.ThumbnailDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnails') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[ActivitySnippetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
