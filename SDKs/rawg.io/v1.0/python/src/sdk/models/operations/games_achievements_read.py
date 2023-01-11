import dataclasses
from typing import Optional
from ..shared import parentachievement as shared_parentachievement


@dataclasses.dataclass
class GamesAchievementsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GamesAchievementsReadRequest:
    path_params: GamesAchievementsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GamesAchievementsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    parent_achievement: Optional[shared_parentachievement.ParentAchievement] = dataclasses.field(default=None)
    
