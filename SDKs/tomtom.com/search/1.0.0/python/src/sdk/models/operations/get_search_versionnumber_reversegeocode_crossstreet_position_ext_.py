import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ext_enum as shared_ext_enum


@dataclasses.dataclass
class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams:
    ext: shared_ext_enum.ExtEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    position: str = dataclasses.field(metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams:
    heading: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'heading', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    radius: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    spatial_keys: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'spatialKeys', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest:
    path_params: GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams = dataclasses.field()
    query_params: GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
