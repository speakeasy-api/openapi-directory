import dataclasses
from typing import Optional


@dataclasses.dataclass
class WritePermissions:
    can_add: Optional[bool] = dataclasses.field(default=None)
    can_delete: Optional[bool] = dataclasses.field(default=None)
    can_edit: Optional[bool] = dataclasses.field(default=None)
    max_daily_actions: Optional[int] = dataclasses.field(default=None)
    min_seconds_between_actions: Optional[int] = dataclasses.field(default=None)
    object_type: Optional[str] = dataclasses.field(default=None)
    user_id: Optional[int] = dataclasses.field(default=None)
    
