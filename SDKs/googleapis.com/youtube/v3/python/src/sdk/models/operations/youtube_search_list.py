import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import searchlistresponse as shared_searchlistresponse

class YoutubeSearchListChannelTypeEnum(str, Enum):
    CHANNEL_TYPE_UNSPECIFIED = "channelTypeUnspecified"
    ANY = "any"
    SHOW = "show"

class YoutubeSearchListEventTypeEnum(str, Enum):
    NONE = "none"
    UPCOMING = "upcoming"
    LIVE = "live"
    COMPLETED = "completed"

class YoutubeSearchListOrderEnum(str, Enum):
    SEARCH_SORT_UNSPECIFIED = "searchSortUnspecified"
    DATE = "date"
    RATING = "rating"
    VIEW_COUNT = "viewCount"
    RELEVANCE = "relevance"
    TITLE = "title"
    VIDEO_COUNT = "videoCount"

class YoutubeSearchListSafeSearchEnum(str, Enum):
    SAFE_SEARCH_SETTING_UNSPECIFIED = "safeSearchSettingUnspecified"
    NONE = "none"
    MODERATE = "moderate"
    STRICT = "strict"

class YoutubeSearchListVideoCaptionEnum(str, Enum):
    VIDEO_CAPTION_UNSPECIFIED = "videoCaptionUnspecified"
    ANY = "any"
    CLOSED_CAPTION = "closedCaption"
    NONE = "none"

class YoutubeSearchListVideoDefinitionEnum(str, Enum):
    ANY = "any"
    STANDARD = "standard"
    HIGH = "high"

class YoutubeSearchListVideoDimensionEnum(str, Enum):
    ANY = "any"
    TWOD = "2d"
    THREED = "3d"

class YoutubeSearchListVideoDurationEnum(str, Enum):
    VIDEO_DURATION_UNSPECIFIED = "videoDurationUnspecified"
    ANY = "any"
    SHORT = "short"
    MEDIUM = "medium"
    LONG = "long"

class YoutubeSearchListVideoEmbeddableEnum(str, Enum):
    VIDEO_EMBEDDABLE_UNSPECIFIED = "videoEmbeddableUnspecified"
    ANY = "any"
    TRUE = "true"

class YoutubeSearchListVideoLicenseEnum(str, Enum):
    ANY = "any"
    YOUTUBE = "youtube"
    CREATIVE_COMMON = "creativeCommon"

class YoutubeSearchListVideoSyndicatedEnum(str, Enum):
    VIDEO_SYNDICATED_UNSPECIFIED = "videoSyndicatedUnspecified"
    ANY = "any"
    TRUE = "true"

class YoutubeSearchListVideoTypeEnum(str, Enum):
    VIDEO_TYPE_UNSPECIFIED = "videoTypeUnspecified"
    ANY = "any"
    MOVIE = "movie"
    EPISODE = "episode"


@dataclasses.dataclass
class YoutubeSearchListQueryParams:
    part: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'part', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'channelId', 'style': 'form', 'explode': True }})
    channel_type: Optional[YoutubeSearchListChannelTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'channelType', 'style': 'form', 'explode': True }})
    event_type: Optional[YoutubeSearchListEventTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'eventType', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    for_content_owner: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forContentOwner', 'style': 'form', 'explode': True }})
    for_developer: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forDeveloper', 'style': 'form', 'explode': True }})
    for_mine: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forMine', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    location_radius: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationRadius', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwner', 'style': 'form', 'explode': True }})
    order: Optional[YoutubeSearchListOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    published_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'publishedAfter', 'style': 'form', 'explode': True }})
    published_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'publishedBefore', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    region_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionCode', 'style': 'form', 'explode': True }})
    related_to_video_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'relatedToVideoId', 'style': 'form', 'explode': True }})
    relevance_language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'relevanceLanguage', 'style': 'form', 'explode': True }})
    safe_search: Optional[YoutubeSearchListSafeSearchEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'safeSearch', 'style': 'form', 'explode': True }})
    topic_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'topicId', 'style': 'form', 'explode': True }})
    type: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    video_caption: Optional[YoutubeSearchListVideoCaptionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'videoCaption', 'style': 'form', 'explode': True }})
    video_category_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'videoCategoryId', 'style': 'form', 'explode': True }})
    video_definition: Optional[YoutubeSearchListVideoDefinitionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'videoDefinition', 'style': 'form', 'explode': True }})
    video_dimension: Optional[YoutubeSearchListVideoDimensionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'videoDimension', 'style': 'form', 'explode': True }})
    video_duration: Optional[YoutubeSearchListVideoDurationEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'videoDuration', 'style': 'form', 'explode': True }})
    video_embeddable: Optional[YoutubeSearchListVideoEmbeddableEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'videoEmbeddable', 'style': 'form', 'explode': True }})
    video_license: Optional[YoutubeSearchListVideoLicenseEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'videoLicense', 'style': 'form', 'explode': True }})
    video_syndicated: Optional[YoutubeSearchListVideoSyndicatedEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'videoSyndicated', 'style': 'form', 'explode': True }})
    video_type: Optional[YoutubeSearchListVideoTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'videoType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class YoutubeSearchListSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class YoutubeSearchListSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class YoutubeSearchListSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class YoutubeSearchListSecurityOption4:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class YoutubeSearchListSecurity:
    option1: Optional[YoutubeSearchListSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[YoutubeSearchListSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[YoutubeSearchListSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[YoutubeSearchListSecurityOption4] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class YoutubeSearchListRequest:
    query_params: YoutubeSearchListQueryParams = dataclasses.field()
    security: YoutubeSearchListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class YoutubeSearchListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_list_response: Optional[shared_searchlistresponse.SearchListResponse] = dataclasses.field(default=None)
    
