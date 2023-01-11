import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ext_enum as shared_ext_enum
from ..shared import view_enum as shared_view_enum


@dataclasses.dataclass
class GetSearchVersionNumberNearbySearchExtPathParams:
    ext: shared_ext_enum.ExtEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSearchVersionNumberNearbySearchExtQueryParams:
    lat: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lon: float = dataclasses.field(metadata={'query_param': { 'field_name': 'lon', 'style': 'form', 'explode': True }})
    btm_right: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'btmRight', 'style': 'form', 'explode': True }})
    country_set: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'countrySet', 'style': 'form', 'explode': True }})
    extended_postal_codes_for: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'extendedPostalCodesFor', 'style': 'form', 'explode': True }})
    idx_set: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'idxSet', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    max_fuzzy_level: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxFuzzyLevel', 'style': 'form', 'explode': True }})
    min_fuzzy_level: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minFuzzyLevel', 'style': 'form', 'explode': True }})
    ofs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ofs', 'style': 'form', 'explode': True }})
    radius: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    top_left: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'topLeft', 'style': 'form', 'explode': True }})
    view: Optional[shared_view_enum.ViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchVersionNumberNearbySearchExtRequest:
    path_params: GetSearchVersionNumberNearbySearchExtPathParams = dataclasses.field()
    query_params: GetSearchVersionNumberNearbySearchExtQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchVersionNumberNearbySearchExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
