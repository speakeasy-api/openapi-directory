import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class PostsLastEditorBadgeCounts:
    bronze: Optional[int] = dataclasses.field(default=None)
    gold: Optional[int] = dataclasses.field(default=None)
    silver: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostsLastEditor:
    accept_rate: Optional[int] = dataclasses.field(default=None)
    badge_counts: Optional[PostsLastEditorBadgeCounts] = dataclasses.field(default=None)
    display_name: Optional[str] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    profile_image: Optional[str] = dataclasses.field(default=None)
    reputation: Optional[int] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    user_type: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostsOwnerBadgeCounts:
    bronze: Optional[int] = dataclasses.field(default=None)
    gold: Optional[int] = dataclasses.field(default=None)
    silver: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostsOwner:
    accept_rate: Optional[int] = dataclasses.field(default=None)
    badge_counts: Optional[PostsOwnerBadgeCounts] = dataclasses.field(default=None)
    display_name: Optional[str] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    profile_image: Optional[str] = dataclasses.field(default=None)
    reputation: Optional[int] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    user_type: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Posts:
    body: Optional[str] = dataclasses.field(default=None)
    body_markdown: Optional[str] = dataclasses.field(default=None)
    comment_count: Optional[int] = dataclasses.field(default=None)
    comments: Optional[list[Any]] = dataclasses.field(default=None)
    creation_date: Optional[int] = dataclasses.field(default=None)
    down_vote_count: Optional[int] = dataclasses.field(default=None)
    downvoted: Optional[bool] = dataclasses.field(default=None)
    last_activity_date: Optional[int] = dataclasses.field(default=None)
    last_edit_date: Optional[int] = dataclasses.field(default=None)
    last_editor: Optional[PostsLastEditor] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    owner: Optional[PostsOwner] = dataclasses.field(default=None)
    post_id: Optional[int] = dataclasses.field(default=None)
    post_type: Optional[str] = dataclasses.field(default=None)
    score: Optional[int] = dataclasses.field(default=None)
    share_link: Optional[str] = dataclasses.field(default=None)
    title: Optional[str] = dataclasses.field(default=None)
    up_vote_count: Optional[int] = dataclasses.field(default=None)
    upvoted: Optional[bool] = dataclasses.field(default=None)
    
