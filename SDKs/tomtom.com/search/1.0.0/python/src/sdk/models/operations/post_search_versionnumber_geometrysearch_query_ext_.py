import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ext_enum as shared_ext_enum


@dataclasses.dataclass
class PostSearchVersionNumberGeometrySearchQueryExtPathParams:
    ext: shared_ext_enum.ExtEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    query: str = dataclasses.field(metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSearchVersionNumberGeometrySearchQueryExtQueryParams:
    extended_postal_codes_for: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'extendedPostalCodesFor', 'style': 'form', 'explode': True }})
    idx_set: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'idxSet', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList:
    position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    radius: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    vertices: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vertices') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberGeometrySearchQueryExtRequestBody:
    geometry_list: Optional[list[PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geometryList') }})
    

@dataclasses.dataclass
class PostSearchVersionNumberGeometrySearchQueryExtRequest:
    path_params: PostSearchVersionNumberGeometrySearchQueryExtPathParams = dataclasses.field()
    query_params: PostSearchVersionNumberGeometrySearchQueryExtQueryParams = dataclasses.field()
    request: Optional[PostSearchVersionNumberGeometrySearchQueryExtRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSearchVersionNumberGeometrySearchQueryExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
