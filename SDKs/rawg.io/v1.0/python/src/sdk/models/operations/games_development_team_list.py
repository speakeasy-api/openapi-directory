import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gamepersonlist as shared_gamepersonlist


@dataclasses.dataclass
class GamesDevelopmentTeamListPathParams:
    game_pk: str = dataclasses.field(metadata={'path_param': { 'field_name': 'game_pk', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GamesDevelopmentTeamListQueryParams:
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GamesDevelopmentTeamList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_gamepersonlist.GamePersonList] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class GamesDevelopmentTeamListRequest:
    path_params: GamesDevelopmentTeamListPathParams = dataclasses.field()
    query_params: GamesDevelopmentTeamListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GamesDevelopmentTeamListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    games_development_team_list_200_application_json_object: Optional[GamesDevelopmentTeamList200ApplicationJSON] = dataclasses.field(default=None)
    
