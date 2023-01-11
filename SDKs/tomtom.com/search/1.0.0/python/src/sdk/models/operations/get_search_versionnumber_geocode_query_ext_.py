import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ext_enum as shared_ext_enum
from ..shared import view_enum as shared_view_enum


@dataclasses.dataclass
class GetSearchVersionNumberGeocodeQueryExtPathParams:
    ext: shared_ext_enum.ExtEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    query: str = dataclasses.field(metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSearchVersionNumberGeocodeQueryExtQueryParams:
    btm_right: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'btmRight', 'style': 'form', 'explode': True }})
    country_set: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'countrySet', 'style': 'form', 'explode': True }})
    extended_postal_codes_for: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'extendedPostalCodesFor', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    lat: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    lon: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lon', 'style': 'form', 'explode': True }})
    ofs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ofs', 'style': 'form', 'explode': True }})
    radius: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    store_result: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'storeResult', 'style': 'form', 'explode': True }})
    top_left: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'topLeft', 'style': 'form', 'explode': True }})
    typeahead: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'typeahead', 'style': 'form', 'explode': True }})
    view: Optional[shared_view_enum.ViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchVersionNumberGeocodeQueryExtRequest:
    path_params: GetSearchVersionNumberGeocodeQueryExtPathParams = dataclasses.field()
    query_params: GetSearchVersionNumberGeocodeQueryExtQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchVersionNumberGeocodeQueryExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
