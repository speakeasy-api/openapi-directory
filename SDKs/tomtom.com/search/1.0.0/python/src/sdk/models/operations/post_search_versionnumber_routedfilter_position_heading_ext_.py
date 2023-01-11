import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ext_enum as shared_ext_enum


@dataclasses.dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams:
    ext: shared_ext_enum.ExtEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    heading: float = dataclasses.field(metadata={'path_param': { 'field_name': 'heading', 'style': 'simple', 'explode': False }})
    position: str = dataclasses.field(metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams:
    routing_timeout: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'routingTimeout', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress:
    freeform_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeformAddress') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition:
    lat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lon: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList:
    address: Optional[PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    poi: Optional[PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poi') }})
    position: Optional[PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    

@dataclass_json
@dataclasses.dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody:
    poi_list: Optional[list[PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poiList') }})
    

@dataclasses.dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest:
    path_params: PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams = dataclasses.field()
    query_params: PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams = dataclasses.field()
    request: Optional[PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
