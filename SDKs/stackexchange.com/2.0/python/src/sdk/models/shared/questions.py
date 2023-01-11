import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class QuestionsBountyUserBadgeCounts:
    bronze: Optional[int] = dataclasses.field(default=None)
    gold: Optional[int] = dataclasses.field(default=None)
    silver: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class QuestionsBountyUser:
    accept_rate: Optional[int] = dataclasses.field(default=None)
    badge_counts: Optional[QuestionsBountyUserBadgeCounts] = dataclasses.field(default=None)
    display_name: Optional[str] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    profile_image: Optional[str] = dataclasses.field(default=None)
    reputation: Optional[int] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    user_type: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class QuestionsClosedDetails:
    by_users: Optional[list[Any]] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    on_hold: Optional[bool] = dataclasses.field(default=None)
    original_questions: Optional[list[Any]] = dataclasses.field(default=None)
    reason: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class QuestionsLastEditorBadgeCounts:
    bronze: Optional[int] = dataclasses.field(default=None)
    gold: Optional[int] = dataclasses.field(default=None)
    silver: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class QuestionsLastEditor:
    accept_rate: Optional[int] = dataclasses.field(default=None)
    badge_counts: Optional[QuestionsLastEditorBadgeCounts] = dataclasses.field(default=None)
    display_name: Optional[str] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    profile_image: Optional[str] = dataclasses.field(default=None)
    reputation: Optional[int] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    user_type: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class QuestionsMigratedFromOtherSiteStyling:
    link_color: Optional[str] = dataclasses.field(default=None)
    tag_background_color: Optional[str] = dataclasses.field(default=None)
    tag_foreground_color: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class QuestionsMigratedFromOtherSite:
    aliases: Optional[list[Any]] = dataclasses.field(default=None)
    api_site_parameter: Optional[str] = dataclasses.field(default=None)
    audience: Optional[str] = dataclasses.field(default=None)
    closed_beta_date: Optional[int] = dataclasses.field(default=None)
    favicon_url: Optional[str] = dataclasses.field(default=None)
    high_resolution_icon_url: Optional[str] = dataclasses.field(default=None)
    icon_url: Optional[str] = dataclasses.field(default=None)
    launch_date: Optional[int] = dataclasses.field(default=None)
    logo_url: Optional[str] = dataclasses.field(default=None)
    markdown_extensions: Optional[list[Any]] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    open_beta_date: Optional[int] = dataclasses.field(default=None)
    related_sites: Optional[list[Any]] = dataclasses.field(default=None)
    site_state: Optional[str] = dataclasses.field(default=None)
    site_type: Optional[str] = dataclasses.field(default=None)
    site_url: Optional[str] = dataclasses.field(default=None)
    styling: Optional[QuestionsMigratedFromOtherSiteStyling] = dataclasses.field(default=None)
    twitter_account: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class QuestionsMigratedFrom:
    on_date: Optional[int] = dataclasses.field(default=None)
    other_site: Optional[QuestionsMigratedFromOtherSite] = dataclasses.field(default=None)
    question_id: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class QuestionsMigratedToOtherSiteStyling:
    link_color: Optional[str] = dataclasses.field(default=None)
    tag_background_color: Optional[str] = dataclasses.field(default=None)
    tag_foreground_color: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class QuestionsMigratedToOtherSite:
    aliases: Optional[list[Any]] = dataclasses.field(default=None)
    api_site_parameter: Optional[str] = dataclasses.field(default=None)
    audience: Optional[str] = dataclasses.field(default=None)
    closed_beta_date: Optional[int] = dataclasses.field(default=None)
    favicon_url: Optional[str] = dataclasses.field(default=None)
    high_resolution_icon_url: Optional[str] = dataclasses.field(default=None)
    icon_url: Optional[str] = dataclasses.field(default=None)
    launch_date: Optional[int] = dataclasses.field(default=None)
    logo_url: Optional[str] = dataclasses.field(default=None)
    markdown_extensions: Optional[list[Any]] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    open_beta_date: Optional[int] = dataclasses.field(default=None)
    related_sites: Optional[list[Any]] = dataclasses.field(default=None)
    site_state: Optional[str] = dataclasses.field(default=None)
    site_type: Optional[str] = dataclasses.field(default=None)
    site_url: Optional[str] = dataclasses.field(default=None)
    styling: Optional[QuestionsMigratedToOtherSiteStyling] = dataclasses.field(default=None)
    twitter_account: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class QuestionsMigratedTo:
    on_date: Optional[int] = dataclasses.field(default=None)
    other_site: Optional[QuestionsMigratedToOtherSite] = dataclasses.field(default=None)
    question_id: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class QuestionsNotice:
    body: Optional[str] = dataclasses.field(default=None)
    creation_date: Optional[int] = dataclasses.field(default=None)
    owner_user_id: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class QuestionsOwnerBadgeCounts:
    bronze: Optional[int] = dataclasses.field(default=None)
    gold: Optional[int] = dataclasses.field(default=None)
    silver: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class QuestionsOwner:
    accept_rate: Optional[int] = dataclasses.field(default=None)
    badge_counts: Optional[QuestionsOwnerBadgeCounts] = dataclasses.field(default=None)
    display_name: Optional[str] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    profile_image: Optional[str] = dataclasses.field(default=None)
    reputation: Optional[int] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    user_type: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Questions:
    accepted_answer_id: Optional[int] = dataclasses.field(default=None)
    answer_count: Optional[int] = dataclasses.field(default=None)
    answers: Optional[list[Any]] = dataclasses.field(default=None)
    body: Optional[str] = dataclasses.field(default=None)
    body_markdown: Optional[str] = dataclasses.field(default=None)
    bounty_amount: Optional[int] = dataclasses.field(default=None)
    bounty_closes_date: Optional[int] = dataclasses.field(default=None)
    bounty_user: Optional[QuestionsBountyUser] = dataclasses.field(default=None)
    can_close: Optional[bool] = dataclasses.field(default=None)
    can_flag: Optional[bool] = dataclasses.field(default=None)
    close_vote_count: Optional[int] = dataclasses.field(default=None)
    closed_date: Optional[int] = dataclasses.field(default=None)
    closed_details: Optional[QuestionsClosedDetails] = dataclasses.field(default=None)
    closed_reason: Optional[str] = dataclasses.field(default=None)
    comment_count: Optional[int] = dataclasses.field(default=None)
    comments: Optional[list[Any]] = dataclasses.field(default=None)
    community_owned_date: Optional[int] = dataclasses.field(default=None)
    creation_date: Optional[int] = dataclasses.field(default=None)
    delete_vote_count: Optional[int] = dataclasses.field(default=None)
    down_vote_count: Optional[int] = dataclasses.field(default=None)
    downvoted: Optional[bool] = dataclasses.field(default=None)
    favorite_count: Optional[int] = dataclasses.field(default=None)
    favorited: Optional[bool] = dataclasses.field(default=None)
    is_answered: Optional[bool] = dataclasses.field(default=None)
    last_activity_date: Optional[int] = dataclasses.field(default=None)
    last_edit_date: Optional[int] = dataclasses.field(default=None)
    last_editor: Optional[QuestionsLastEditor] = dataclasses.field(default=None)
    link: Optional[str] = dataclasses.field(default=None)
    locked_date: Optional[int] = dataclasses.field(default=None)
    migrated_from: Optional[QuestionsMigratedFrom] = dataclasses.field(default=None)
    migrated_to: Optional[QuestionsMigratedTo] = dataclasses.field(default=None)
    notice: Optional[QuestionsNotice] = dataclasses.field(default=None)
    owner: Optional[QuestionsOwner] = dataclasses.field(default=None)
    protected_date: Optional[int] = dataclasses.field(default=None)
    question_id: Optional[int] = dataclasses.field(default=None)
    reopen_vote_count: Optional[int] = dataclasses.field(default=None)
    score: Optional[int] = dataclasses.field(default=None)
    share_link: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[Any]] = dataclasses.field(default=None)
    title: Optional[str] = dataclasses.field(default=None)
    up_vote_count: Optional[int] = dataclasses.field(default=None)
    upvoted: Optional[bool] = dataclasses.field(default=None)
    view_count: Optional[int] = dataclasses.field(default=None)
    
