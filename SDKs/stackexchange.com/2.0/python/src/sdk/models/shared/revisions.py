import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class RevisionsUserBadgeCounts:
    bronze: Optional[int] = dataclasses.field(default=None)
    gold: Optional[int] = dataclasses.field(default=None)
    silver: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RevisionsUser:
    accept_rate: Optional[int] = dataclasses.field(default=None)
    badge_counts: Optional[RevisionsUserBadgeCounts] = dataclasses.field(default=None)
    display_name: Optional[str] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    profile_image: Optional[str] = dataclasses.field(default=None)
    reputation: Optional[int] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    user_type: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Revisions:
    body: Optional[str] = dataclasses.field(default=None)
    comment: Optional[str] = dataclasses.field(default=None)
    creation_date: Optional[int] = dataclasses.field(default=None)
    is_rollback: Optional[bool] = dataclasses.field(default=None)
    last_body: Optional[str] = dataclasses.field(default=None)
    last_tags: Optional[list[Any]] = dataclasses.field(default=None)
    last_title: Optional[str] = dataclasses.field(default=None)
    post_id: Optional[int] = dataclasses.field(default=None)
    post_type: Optional[str] = dataclasses.field(default=None)
    revision_guid: Optional[str] = dataclasses.field(default=None)
    revision_number: Optional[int] = dataclasses.field(default=None)
    revision_type: Optional[str] = dataclasses.field(default=None)
    set_community_wiki: Optional[bool] = dataclasses.field(default=None)
    tags: Optional[list[Any]] = dataclasses.field(default=None)
    title: Optional[str] = dataclasses.field(default=None)
    user: Optional[RevisionsUser] = dataclasses.field(default=None)
    
