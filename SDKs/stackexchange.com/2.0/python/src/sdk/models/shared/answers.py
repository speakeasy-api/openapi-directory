import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class AnswersLastEditorBadgeCounts:
    bronze: Optional[int] = dataclasses.field(default=None)
    gold: Optional[int] = dataclasses.field(default=None)
    silver: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AnswersLastEditor:
    accept_rate: Optional[int] = dataclasses.field(default=None)
    badge_counts: Optional[AnswersLastEditorBadgeCounts] = dataclasses.field(default=None)
    display_name: Optional[str] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    profile_image: Optional[str] = dataclasses.field(default=None)
    reputation: Optional[int] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    user_type: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AnswersOwnerBadgeCounts:
    bronze: Optional[int] = dataclasses.field(default=None)
    gold: Optional[int] = dataclasses.field(default=None)
    silver: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AnswersOwner:
    accept_rate: Optional[int] = dataclasses.field(default=None)
    badge_counts: Optional[AnswersOwnerBadgeCounts] = dataclasses.field(default=None)
    display_name: Optional[str] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    profile_image: Optional[str] = dataclasses.field(default=None)
    reputation: Optional[int] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    user_type: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Answers:
    accepted: Optional[bool] = dataclasses.field(default=None)
    answer_id: Optional[int] = dataclasses.field(default=None)
    awarded_bounty_amount: Optional[int] = dataclasses.field(default=None)
    awarded_bounty_users: Optional[list[Any]] = dataclasses.field(default=None)
    body: Optional[str] = dataclasses.field(default=None)
    body_markdown: Optional[str] = dataclasses.field(default=None)
    can_flag: Optional[bool] = dataclasses.field(default=None)
    comment_count: Optional[int] = dataclasses.field(default=None)
    comments: Optional[list[Any]] = dataclasses.field(default=None)
    community_owned_date: Optional[int] = dataclasses.field(default=None)
    creation_date: Optional[int] = dataclasses.field(default=None)
    down_vote_count: Optional[int] = dataclasses.field(default=None)
    downvoted: Optional[bool] = dataclasses.field(default=None)
    is_accepted: Optional[bool] = dataclasses.field(default=None)
    last_activity_date: Optional[int] = dataclasses.field(default=None)
    last_edit_date: Optional[int] = dataclasses.field(default=None)
    last_editor: Optional[AnswersLastEditor] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    locked_date: Optional[int] = dataclasses.field(default=None)
    owner: Optional[AnswersOwner] = dataclasses.field(default=None)
    question_id: Optional[int] = dataclasses.field(default=None)
    score: Optional[int] = dataclasses.field(default=None)
    share_link: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[Any]] = dataclasses.field(default=None)
    title: Optional[str] = dataclasses.field(default=None)
    up_vote_count: Optional[int] = dataclasses.field(default=None)
    upvoted: Optional[bool] = dataclasses.field(default=None)
    
