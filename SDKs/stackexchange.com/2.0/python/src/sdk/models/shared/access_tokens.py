import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class AccessTokens:
    access_token: Optional[str] = dataclasses.field(default=None)
    account_id: Optional[int] = dataclasses.field(default=None)
    expires_on_date: Optional[int] = dataclasses.field(default=None)
    scope: Optional[list[Any]] = dataclasses.field(default=None)
    
