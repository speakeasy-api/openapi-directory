import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import commentsnippetauthorchannelid as shared_commentsnippetauthorchannelid

class CommentSnippetModerationStatusEnum(str, Enum):
    PUBLISHED = "published"
    HELD_FOR_REVIEW = "heldForReview"
    LIKELY_SPAM = "likelySpam"
    REJECTED = "rejected"

class CommentSnippetViewerRatingEnum(str, Enum):
    NONE = "none"
    LIKE = "like"
    DISLIKE = "dislike"


@dataclass_json
@dataclasses.dataclass
class CommentSnippet:
    r"""CommentSnippet
    Basic details about a comment, such as its author and text.
    """
    
    author_channel_id: Optional[shared_commentsnippetauthorchannelid.CommentSnippetAuthorChannelID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorChannelId') }})
    author_channel_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorChannelUrl') }})
    author_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorDisplayName') }})
    author_profile_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorProfileImageUrl') }})
    can_rate: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRate') }})
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    like_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likeCount') }})
    moderation_status: Optional[CommentSnippetModerationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderationStatus') }})
    parent_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentId') }})
    published_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    text_display: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textDisplay') }})
    text_original: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textOriginal') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    video_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoId') }})
    viewer_rating: Optional[CommentSnippetViewerRatingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewerRating') }})
    
