import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ext_enum as shared_ext_enum


@dataclasses.dataclass
class PostSearchVersionNumberGeometryFilterExtPathParams:
    ext: shared_ext_enum.ExtEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList:
    position: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    radius: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    vertices: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vertices') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress:
    freeform_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeformAddress') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition:
    lat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lon: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList:
    address: Optional[PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    poi: Optional[PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poi') }})
    position: Optional[PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBody:
    geometry_list: Optional[list[PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geometryList') }})
    poi_list: Optional[list[PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poiList') }})
    

@dataclasses.dataclass
class PostSearchVersionNumberGeometryFilterExtRequest:
    path_params: PostSearchVersionNumberGeometryFilterExtPathParams = dataclasses.field()
    request: Optional[PostSearchVersionNumberGeometryFilterExtRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSearchVersionNumberGeometryFilterExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
