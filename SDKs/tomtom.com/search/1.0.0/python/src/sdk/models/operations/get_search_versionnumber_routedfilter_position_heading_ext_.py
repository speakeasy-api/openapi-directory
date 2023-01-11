import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ext_enum as shared_ext_enum


@dataclasses.dataclass
class GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams:
    ext: shared_ext_enum.ExtEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    heading: float = dataclasses.field(metadata={'path_param': { 'field_name': 'heading', 'style': 'simple', 'explode': False }})
    position: str = dataclasses.field(metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams:
    poi_list: str = dataclasses.field(metadata={'query_param': { 'field_name': 'poiList', 'style': 'form', 'explode': True }})
    routing_timeout: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'routingTimeout', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest:
    path_params: GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams = dataclasses.field()
    query_params: GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
