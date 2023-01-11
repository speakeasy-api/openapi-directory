import dataclasses
from enum import Enum
from ..shared import ext_enum as shared_ext_enum


@dataclasses.dataclass
class GetSearchVersionNumberGeometryFilterExtPathParams:
    ext: shared_ext_enum.ExtEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSearchVersionNumberGeometryFilterExtQueryParams:
    geometry_list: str = dataclasses.field(metadata={'query_param': { 'field_name': 'geometryList', 'style': 'form', 'explode': True }})
    poi_list: str = dataclasses.field(metadata={'query_param': { 'field_name': 'poiList', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchVersionNumberGeometryFilterExtRequest:
    path_params: GetSearchVersionNumberGeometryFilterExtPathParams = dataclasses.field()
    query_params: GetSearchVersionNumberGeometryFilterExtQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchVersionNumberGeometryFilterExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
