import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostScrobbleEpisodesRequestBody:
    episode_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episode_id') }})
    marked_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marked_at') }})
    type: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class PostScrobbleEpisodesRequest:
    request: Optional[list[PostScrobbleEpisodesRequestBody]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostScrobbleEpisodesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulk_response: Optional[list[Any]] = dataclasses.field(default=None)
    
