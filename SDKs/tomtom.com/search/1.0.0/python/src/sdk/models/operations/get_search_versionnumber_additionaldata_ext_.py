import dataclasses
from typing import Optional
from enum import Enum
from ..shared import versionnumber_enum as shared_versionnumber_enum


@dataclasses.dataclass
class GetSearchVersionNumberAdditionalDataExtPathParams:
    ext: shared_versionnumber_enum.VersionNumberEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSearchVersionNumberAdditionalDataExtQueryParams:
    geometries: str = dataclasses.field(metadata={'query_param': { 'field_name': 'geometries', 'style': 'form', 'explode': True }})
    geometries_zoom: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'geometriesZoom', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchVersionNumberAdditionalDataExtRequest:
    path_params: GetSearchVersionNumberAdditionalDataExtPathParams = dataclasses.field()
    query_params: GetSearchVersionNumberAdditionalDataExtQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchVersionNumberAdditionalDataExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
