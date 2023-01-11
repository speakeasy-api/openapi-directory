import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ext_enum as shared_ext_enum


@dataclasses.dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtPathParams:
    ext: shared_ext_enum.ExtEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    query: str = dataclasses.field(metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams:
    max_detour_time: int = dataclasses.field(metadata={'query_param': { 'field_name': 'maxDetourTime', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints:
    lat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lon: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute:
    points: Optional[list[PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody:
    route: Optional[PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route') }})
    

@dataclasses.dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtRequest:
    path_params: PostSearchVersionNumberSearchAlongRouteQueryExtPathParams = dataclasses.field()
    query_params: PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams = dataclasses.field()
    request: Optional[PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
