import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class ReputationHistory:
    creation_date: Optional[int] = dataclasses.field(default=None)
    post_id: Optional[int] = dataclasses.field(default=None)
    reputation_change: Optional[int] = dataclasses.field(default=None)
    reputation_history_type: Optional[str] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    
