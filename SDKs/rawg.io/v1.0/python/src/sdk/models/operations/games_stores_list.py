import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gamestorefull as shared_gamestorefull


@dataclasses.dataclass
class GamesStoresListPathParams:
    game_pk: str = dataclasses.field(metadata={'path_param': { 'field_name': 'game_pk', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GamesStoresListQueryParams:
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GamesStoresList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_gamestorefull.GameStoreFull] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class GamesStoresListRequest:
    path_params: GamesStoresListPathParams = dataclasses.field()
    query_params: GamesStoresListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GamesStoresListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    games_stores_list_200_application_json_object: Optional[GamesStoresList200ApplicationJSON] = dataclasses.field(default=None)
    
