import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import game as shared_game


@dataclasses.dataclass
class GamesListQueryParams:
    creators: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'creators', 'style': 'form', 'explode': True }})
    dates: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dates', 'style': 'form', 'explode': True }})
    developers: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'developers', 'style': 'form', 'explode': True }})
    exclude_additions: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_additions', 'style': 'form', 'explode': True }})
    exclude_collection: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_collection', 'style': 'form', 'explode': True }})
    exclude_game_series: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_game_series', 'style': 'form', 'explode': True }})
    exclude_parents: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_parents', 'style': 'form', 'explode': True }})
    exclude_stores: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude_stores', 'style': 'form', 'explode': True }})
    genres: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'genres', 'style': 'form', 'explode': True }})
    metacritic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'metacritic', 'style': 'form', 'explode': True }})
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    parent_platforms: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parent_platforms', 'style': 'form', 'explode': True }})
    platforms: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'platforms', 'style': 'form', 'explode': True }})
    platforms_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'platforms_count', 'style': 'form', 'explode': True }})
    publishers: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'publishers', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    search_exact: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search_exact', 'style': 'form', 'explode': True }})
    search_precise: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search_precise', 'style': 'form', 'explode': True }})
    stores: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stores', 'style': 'form', 'explode': True }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    updated: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'updated', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GamesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_game.Game] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class GamesListRequest:
    query_params: GamesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GamesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    games_list_200_application_json_object: Optional[GamesList200ApplicationJSON] = dataclasses.field(default=None)
    
