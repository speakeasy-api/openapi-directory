import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import audiosearchresults as shared_audiosearchresults

class SearchTracksLibraryEnum(str, Enum):
    SHUTTERSTOCK = "shutterstock"
    PREMIER = "premier"

class SearchTracksSortEnum(str, Enum):
    SCORE = "score"
    RANKING_ALL = "ranking_all"
    ARTIST = "artist"
    TITLE = "title"
    BPM = "bpm"
    FRESHNESS = "freshness"
    DURATION = "duration"

class SearchTracksSortOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class SearchTracksViewEnum(str, Enum):
    MINIMAL = "minimal"
    FULL = "full"


@dataclasses.dataclass
class SearchTracksQueryParams:
    artists: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'artists', 'style': 'form', 'explode': True }})
    bpm: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bpm', 'style': 'form', 'explode': True }})
    bpm_from: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bpm_from', 'style': 'form', 'explode': True }})
    bpm_to: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bpm_to', 'style': 'form', 'explode': True }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    duration_from: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'duration_from', 'style': 'form', 'explode': True }})
    duration_to: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'duration_to', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    genre: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'genre', 'style': 'form', 'explode': True }})
    instruments: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'instruments', 'style': 'form', 'explode': True }})
    is_instrumental: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_instrumental', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    library: Optional[SearchTracksLibraryEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'library', 'style': 'form', 'explode': True }})
    moods: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'moods', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[SearchTracksSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_order: Optional[SearchTracksSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_order', 'style': 'form', 'explode': True }})
    view: Optional[SearchTracksViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    vocal_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vocal_description', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchTracksSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SearchTracksRequest:
    query_params: SearchTracksQueryParams = dataclasses.field()
    security: SearchTracksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SearchTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audio_search_results: Optional[shared_audiosearchresults.AudioSearchResults] = dataclasses.field(default=None)
    
