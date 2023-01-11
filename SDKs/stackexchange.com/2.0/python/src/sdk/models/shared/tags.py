import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class Tags:
    count: Optional[int] = dataclasses.field(default=None)
    has_synonyms: Optional[bool] = dataclasses.field(default=None)
    is_moderator_only: Optional[bool] = dataclasses.field(default=None)
    is_required: Optional[bool] = dataclasses.field(default=None)
    last_activity_date: Optional[int] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    synonyms: Optional[list[Any]] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    
