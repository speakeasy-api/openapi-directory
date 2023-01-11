import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class AccountMerge:
    merge_date: Optional[int] = dataclasses.field(default=None)
    new_account_id: Optional[int] = dataclasses.field(default=None)
    old_account_id: Optional[int] = dataclasses.field(default=None)
    
