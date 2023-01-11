import dataclasses
from typing import Optional
from ..shared import gamesingle as shared_gamesingle


@dataclasses.dataclass
class GamesSuggestedReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GamesSuggestedReadRequest:
    path_params: GamesSuggestedReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GamesSuggestedReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    game_single: Optional[shared_gamesingle.GameSingle] = dataclasses.field(default=None)
    
