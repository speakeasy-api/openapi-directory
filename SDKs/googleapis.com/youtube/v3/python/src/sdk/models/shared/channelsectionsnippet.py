import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelsectionlocalization as shared_channelsectionlocalization

class ChannelSectionSnippetStyleEnum(str, Enum):
    CHANNELSECTION_STYLE_UNSPECIFIED = "channelsectionStyleUnspecified"
    HORIZONTAL_ROW = "horizontalRow"
    VERTICAL_LIST = "verticalList"

class ChannelSectionSnippetTypeEnum(str, Enum):
    CHANNELSECTION_TYPE_UNDEFINED = "channelsectionTypeUndefined"
    SINGLE_PLAYLIST = "singlePlaylist"
    MULTIPLE_PLAYLISTS = "multiplePlaylists"
    POPULAR_UPLOADS = "popularUploads"
    RECENT_UPLOADS = "recentUploads"
    LIKES = "likes"
    ALL_PLAYLISTS = "allPlaylists"
    LIKED_PLAYLISTS = "likedPlaylists"
    RECENT_POSTS = "recentPosts"
    RECENT_ACTIVITY = "recentActivity"
    LIVE_EVENTS = "liveEvents"
    UPCOMING_EVENTS = "upcomingEvents"
    COMPLETED_EVENTS = "completedEvents"
    MULTIPLE_CHANNELS = "multipleChannels"
    POSTED_VIDEOS = "postedVideos"
    POSTED_PLAYLISTS = "postedPlaylists"
    SUBSCRIPTIONS = "subscriptions"


@dataclass_json
@dataclasses.dataclass
class ChannelSectionSnippet:
    r"""ChannelSectionSnippet
    Basic details about a channel section, including title, style and position.
    """
    
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    default_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLanguage') }})
    localized: Optional[shared_channelsectionlocalization.ChannelSectionLocalization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localized') }})
    position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    style: Optional[ChannelSectionSnippetStyleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('style') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[ChannelSectionSnippetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
