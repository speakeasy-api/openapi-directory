import dataclasses
from typing import Optional
from ..shared import twitch as shared_twitch


@dataclasses.dataclass
class GamesTwitchReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GamesTwitchReadRequest:
    path_params: GamesTwitchReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GamesTwitchReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    twitch: Optional[shared_twitch.Twitch] = dataclasses.field(default=None)
    
