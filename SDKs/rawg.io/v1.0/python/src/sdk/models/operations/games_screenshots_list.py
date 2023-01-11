import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import screenshot as shared_screenshot


@dataclasses.dataclass
class GamesScreenshotsListPathParams:
    game_pk: str = dataclasses.field(metadata={'path_param': { 'field_name': 'game_pk', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GamesScreenshotsListQueryParams:
    ordering: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GamesScreenshotsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_screenshot.ScreenShot] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class GamesScreenshotsListRequest:
    path_params: GamesScreenshotsListPathParams = dataclasses.field()
    query_params: GamesScreenshotsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GamesScreenshotsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    games_screenshots_list_200_application_json_object: Optional[GamesScreenshotsList200ApplicationJSON] = dataclasses.field(default=None)
    
