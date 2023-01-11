import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class TagSynonyms:
    applied_count: Optional[int] = dataclasses.field(default=None)
    creation_date: Optional[int] = dataclasses.field(default=None)
    from_tag: Optional[str] = dataclasses.field(default=None)
    last_applied_date: Optional[int] = dataclasses.field(default=None)
    to_tag: Optional[str] = dataclasses.field(default=None)
    
