import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class ReputationChanges:
    link: Optional[str] = dataclasses.field(default=None)
    on_date: Optional[int] = dataclasses.field(default=None)
    post_id: Optional[int] = dataclasses.field(default=None)
    post_type: Optional[str] = dataclasses.field(default=None)
    reputation_change: Optional[int] = dataclasses.field(default=None)
    title: Optional[str] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    vote_type: Optional[str] = dataclasses.field(default=None)
    
