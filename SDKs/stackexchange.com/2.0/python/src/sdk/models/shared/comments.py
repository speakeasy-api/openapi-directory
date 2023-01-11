import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class CommentsOwnerBadgeCounts:
    bronze: Optional[int] = dataclasses.field(default=None)
    gold: Optional[int] = dataclasses.field(default=None)
    silver: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CommentsOwner:
    accept_rate: Optional[int] = dataclasses.field(default=None)
    badge_counts: Optional[CommentsOwnerBadgeCounts] = dataclasses.field(default=None)
    display_name: Optional[str] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    profile_image: Optional[str] = dataclasses.field(default=None)
    reputation: Optional[int] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    user_type: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CommentsReplyToUserBadgeCounts:
    bronze: Optional[int] = dataclasses.field(default=None)
    gold: Optional[int] = dataclasses.field(default=None)
    silver: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CommentsReplyToUser:
    accept_rate: Optional[int] = dataclasses.field(default=None)
    badge_counts: Optional[CommentsReplyToUserBadgeCounts] = dataclasses.field(default=None)
    display_name: Optional[str] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    profile_image: Optional[str] = dataclasses.field(default=None)
    reputation: Optional[int] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    user_type: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Comments:
    body: Optional[str] = dataclasses.field(default=None)
    body_markdown: Optional[str] = dataclasses.field(default=None)
    can_flag: Optional[bool] = dataclasses.field(default=None)
    comment_id: Optional[int] = dataclasses.field(default=None)
    creation_date: Optional[int] = dataclasses.field(default=None)
    edited: Optional[bool] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    owner: Optional[CommentsOwner] = dataclasses.field(default=None)
    post_id: Optional[int] = dataclasses.field(default=None)
    post_type: Optional[str] = dataclasses.field(default=None)
    reply_to_user: Optional[CommentsReplyToUser] = dataclasses.field(default=None)
    score: Optional[int] = dataclasses.field(default=None)
    upvoted: Optional[bool] = dataclasses.field(default=None)
    
