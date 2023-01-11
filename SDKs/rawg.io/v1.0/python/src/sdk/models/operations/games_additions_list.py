import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import game as shared_game


@dataclasses.dataclass
class GamesAdditionsListPathParams:
    game_pk: str = dataclasses.field(metadata={'path_param': { 'field_name': 'game_pk', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GamesAdditionsListQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GamesAdditionsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_game.Game] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class GamesAdditionsListRequest:
    path_params: GamesAdditionsListPathParams = dataclasses.field()
    query_params: GamesAdditionsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GamesAdditionsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    games_additions_list_200_application_json_object: Optional[GamesAdditionsList200ApplicationJSON] = dataclasses.field(default=None)
    
