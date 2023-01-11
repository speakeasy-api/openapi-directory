import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class NetworkUsersBadgeCounts:
    bronze: Optional[int] = dataclasses.field(default=None)
    gold: Optional[int] = dataclasses.field(default=None)
    silver: Optional[int] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class NetworkUsers:
    account_id: Optional[int] = dataclasses.field(default=None)
    answer_count: Optional[int] = dataclasses.field(default=None)
    badge_counts: Optional[NetworkUsersBadgeCounts] = dataclasses.field(default=None)
    creation_date: Optional[int] = dataclasses.field(default=None)
    last_access_date: Optional[int] = dataclasses.field(default=None)
    question_count: Optional[int] = dataclasses.field(default=None)
    reputation: Optional[int] = dataclasses.field(default=None)
    site_name: Optional[str] = dataclasses.field(default=None)
    site_url: Optional[str] = dataclasses.field(default=None)
    top_answers: Optional[list[Any]] = dataclasses.field(default=None)
    top_questions: Optional[list[Any]] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    user_type: Optional[str] = dataclasses.field(default=None)
    
