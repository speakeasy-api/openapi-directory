import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ext_enum as shared_ext_enum


@dataclasses.dataclass
class GetSearchVersionNumberGeometrySearchQueryExtPathParams:
    ext: shared_ext_enum.ExtEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    query: str = dataclasses.field(metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSearchVersionNumberGeometrySearchQueryExtQueryParams:
    extended_postal_codes_for: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'extendedPostalCodesFor', 'style': 'form', 'explode': True }})
    geometry_list: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'geometryList', 'style': 'form', 'explode': True }})
    idx_set: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'idxSet', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchVersionNumberGeometrySearchQueryExtRequest:
    path_params: GetSearchVersionNumberGeometrySearchQueryExtPathParams = dataclasses.field()
    query_params: GetSearchVersionNumberGeometrySearchQueryExtQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchVersionNumberGeometrySearchQueryExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
