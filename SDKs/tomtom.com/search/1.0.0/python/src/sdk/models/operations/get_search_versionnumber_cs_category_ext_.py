import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ext_enum as shared_ext_enum
from ..shared import view_enum as shared_view_enum


@dataclasses.dataclass
class GetSearchVersionNumberCSCategoryExtPathParams:
    category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    ext: shared_ext_enum.ExtEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSearchVersionNumberCSCategoryExtQueryParams:
    btm_right: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'btmRight', 'style': 'form', 'explode': True }})
    country_set: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'countrySet', 'style': 'form', 'explode': True }})
    idx_set: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'idxSet', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    lat: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    lon: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lon', 'style': 'form', 'explode': True }})
    ofs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ofs', 'style': 'form', 'explode': True }})
    radius: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    top_left: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'topLeft', 'style': 'form', 'explode': True }})
    typeahead: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'typeahead', 'style': 'form', 'explode': True }})
    view: Optional[shared_view_enum.ViewEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchVersionNumberCSCategoryExtRequest:
    path_params: GetSearchVersionNumberCSCategoryExtPathParams = dataclasses.field()
    query_params: GetSearchVersionNumberCSCategoryExtQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchVersionNumberCSCategoryExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
