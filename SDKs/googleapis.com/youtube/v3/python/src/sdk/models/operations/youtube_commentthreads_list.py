import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import commentthreadlistresponse as shared_commentthreadlistresponse

class YoutubeCommentThreadsListModerationStatusEnum(str, Enum):
    PUBLISHED = "published"
    HELD_FOR_REVIEW = "heldForReview"
    LIKELY_SPAM = "likelySpam"
    REJECTED = "rejected"

class YoutubeCommentThreadsListOrderEnum(str, Enum):
    ORDER_UNSPECIFIED = "orderUnspecified"
    TIME = "time"
    RELEVANCE = "relevance"

class YoutubeCommentThreadsListTextFormatEnum(str, Enum):
    TEXT_FORMAT_UNSPECIFIED = "textFormatUnspecified"
    HTML = "html"
    PLAIN_TEXT = "plainText"


@dataclasses.dataclass
class YoutubeCommentThreadsListQueryParams:
    part: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'part', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    all_threads_related_to_channel_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'allThreadsRelatedToChannelId', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    channel_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'channelId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    moderation_status: Optional[YoutubeCommentThreadsListModerationStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'moderationStatus', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order: Optional[YoutubeCommentThreadsListOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    search_terms: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'searchTerms', 'style': 'form', 'explode': True }})
    text_format: Optional[YoutubeCommentThreadsListTextFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'textFormat', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    video_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'videoId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class YoutubeCommentThreadsListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class YoutubeCommentThreadsListRequest:
    query_params: YoutubeCommentThreadsListQueryParams = dataclasses.field()
    security: YoutubeCommentThreadsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class YoutubeCommentThreadsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    comment_thread_list_response: Optional[shared_commentthreadlistresponse.CommentThreadListResponse] = dataclasses.field(default=None)
    
