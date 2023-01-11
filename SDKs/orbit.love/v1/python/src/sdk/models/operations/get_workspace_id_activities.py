import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security


@dataclasses.dataclass
class GetWorkspaceIDActivitiesPathParams:
    workspace_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    
class GetWorkspaceIDActivitiesActivityTypeEnum(str, Enum):
    DISCORD_MESSAGE_SENT = "discord:message:sent"
    SLACK_THREAD_REPLIED = "slack:thread:replied"
    DISCORD_MESSAGE_REPLIED = "discord:message:replied"
    TWEET_SENT = "tweet:sent"
    TWITTER_FOLLOWED = "twitter:followed"
    DISCORD_SERVER_JOINED = "discord:server:joined"
    DISCOURSE_TOPIC_CREATED = "discourse:topic:created"
    DISCOURSE_POST_CREATED = "discourse:post:created"
    SLACK_MESSAGE_SENT = "slack:message:sent"
    NOTE_CREATED = "note:created"
    POST_CREATED = "post:created"
    ISSUES_OPENED = "issues:opened"
    ISSUE_COMMENT_CREATED = "issue_comment:created"
    PULL_REQUESTS_OPENED = "pull_requests:opened"
    PULL_REQUESTS_MERGED = "pull_requests:merged"
    CUSTOM_HAPPENED = "custom:happened"
    SLACK_CHANNEL_JOINED = "slack:channel:joined"
    STAR_CREATED = "star:created"

class GetWorkspaceIDActivitiesAffiliationEnum(str, Enum):
    MEMBER = "member"
    TEAMMATE = "teammate"

class GetWorkspaceIDActivitiesDirectionEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"

class GetWorkspaceIDActivitiesIdentityEnum(str, Enum):
    GITHUB = "github"
    TWITTER = "twitter"
    EMAIL = "email"
    DISCOURSE = "discourse"
    LINKEDIN = "linkedin"
    DEVTO = "devto"
    SLACK = "slack"
    DISCORD = "discord"

class GetWorkspaceIDActivitiesItemsEnum(str, Enum):
    TEN = "10"
    FIFTY = "50"
    ONE_HUNDRED = "100"

class GetWorkspaceIDActivitiesOrbitLevelEnum(str, Enum):
    ONE = "1"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    N = "n"

class GetWorkspaceIDActivitiesSortEnum(str, Enum):
    OCCURRED_AT = "occurred_at"
    MEMBER = "member"


@dataclasses.dataclass
class GetWorkspaceIDActivitiesQueryParams:
    activity_tags: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'activity_tags', 'style': 'form', 'explode': True }})
    activity_type: Optional[GetWorkspaceIDActivitiesActivityTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'activity_type', 'style': 'form', 'explode': True }})
    affiliation: Optional[GetWorkspaceIDActivitiesAffiliationEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'affiliation', 'style': 'form', 'explode': True }})
    company: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'company', 'style': 'form', 'explode': True }})
    direction: Optional[GetWorkspaceIDActivitiesDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    identity: Optional[GetWorkspaceIDActivitiesIdentityEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'identity', 'style': 'form', 'explode': True }})
    items: Optional[GetWorkspaceIDActivitiesItemsEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'items', 'style': 'form', 'explode': True }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    member_tags: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'member_tags', 'style': 'form', 'explode': True }})
    orbit_level: Optional[GetWorkspaceIDActivitiesOrbitLevelEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orbit_level', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort: Optional[GetWorkspaceIDActivitiesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    weight: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'weight', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWorkspaceIDActivitiesSecurity:
    bearer: shared_security.SchemeBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetWorkspaceIDActivitiesRequest:
    path_params: GetWorkspaceIDActivitiesPathParams = dataclasses.field()
    query_params: GetWorkspaceIDActivitiesQueryParams = dataclasses.field()
    security: GetWorkspaceIDActivitiesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspaceIDActivitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
