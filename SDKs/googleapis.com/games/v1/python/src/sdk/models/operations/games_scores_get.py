import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import playerleaderboardscorelistresponse as shared_playerleaderboardscorelistresponse

class GamesScoresGetTimeSpanEnum(str, Enum):
    SCORE_TIME_SPAN_UNSPECIFIED = "SCORE_TIME_SPAN_UNSPECIFIED"
    ALL = "ALL"
    ALL_TIME = "ALL_TIME"
    WEEKLY = "WEEKLY"
    DAILY = "DAILY"


@dataclasses.dataclass
class GamesScoresGetPathParams:
    leaderboard_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'leaderboardId', 'style': 'simple', 'explode': False }})
    player_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playerId', 'style': 'simple', 'explode': False }})
    time_span: GamesScoresGetTimeSpanEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'timeSpan', 'style': 'simple', 'explode': False }})
    
class GamesScoresGetIncludeRankTypeEnum(str, Enum):
    INCLUDE_RANK_TYPE_UNSPECIFIED = "INCLUDE_RANK_TYPE_UNSPECIFIED"
    ALL = "ALL"
    PUBLIC = "PUBLIC"
    SOCIAL = "SOCIAL"
    FRIENDS = "FRIENDS"


@dataclasses.dataclass
class GamesScoresGetQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_rank_type: Optional[GamesScoresGetIncludeRankTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeRankType', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GamesScoresGetSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GamesScoresGetRequest:
    path_params: GamesScoresGetPathParams = dataclasses.field()
    query_params: GamesScoresGetQueryParams = dataclasses.field()
    security: GamesScoresGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GamesScoresGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    player_leaderboard_score_list_response: Optional[shared_playerleaderboardscorelistresponse.PlayerLeaderboardScoreListResponse] = dataclasses.field(default=None)
    
