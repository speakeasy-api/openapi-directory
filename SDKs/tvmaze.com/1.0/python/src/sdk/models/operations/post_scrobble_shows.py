import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostScrobbleShowsQueryParams:
    imdb_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'imdb_id', 'style': 'form', 'explode': True }})
    thetvdb_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'thetvdb_id', 'style': 'form', 'explode': True }})
    tvmaze_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tvmaze_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class PostScrobbleShowsRequestBody:
    airdate: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('airdate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    episode: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episode') }})
    marked_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marked_at') }})
    season: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    type: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class PostScrobbleShowsRequest:
    query_params: PostScrobbleShowsQueryParams = dataclasses.field()
    request: Optional[list[PostScrobbleShowsRequestBody]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostScrobbleShowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulk_response: Optional[list[Any]] = dataclasses.field(default=None)
    
