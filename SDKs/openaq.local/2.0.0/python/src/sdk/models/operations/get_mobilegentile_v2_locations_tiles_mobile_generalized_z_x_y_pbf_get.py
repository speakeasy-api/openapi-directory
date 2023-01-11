import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams:
    x: int = dataclasses.field(metadata={'path_param': { 'field_name': 'x', 'style': 'simple', 'explode': False }})
    y: int = dataclasses.field(metadata={'path_param': { 'field_name': 'y', 'style': 'simple', 'explode': False }})
    z: int = dataclasses.field(metadata={'path_param': { 'field_name': 'z', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams:
    is_analysis: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isAnalysis', 'style': 'form', 'explode': True }})
    is_mobile: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isMobile', 'style': 'form', 'explode': True }})
    last_updated_from: Optional[Any] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lastUpdatedFrom', 'style': 'form', 'explode': True }})
    last_updated_to: Optional[Any] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lastUpdatedTo', 'style': 'form', 'explode': True }})
    location: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    parameter: Optional[Any] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parameter', 'style': 'form', 'explode': True }})
    project: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest:
    path_params: GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams = dataclasses.field()
    query_params: GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
