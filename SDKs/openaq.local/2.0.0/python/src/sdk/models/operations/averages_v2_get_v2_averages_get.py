import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import spatial_enum as shared_spatial_enum
from ..shared import temporal_enum as shared_temporal_enum
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import openaqresult as shared_openaqresult


@dataclasses.dataclass
class AveragesV2GetV2AveragesGetQueryParams:
    spatial: shared_spatial_enum.SpatialEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'spatial', 'style': 'form', 'explode': True }})
    temporal: shared_temporal_enum.TemporalEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'temporal', 'style': 'form', 'explode': True }})
    country: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    country_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country_id', 'style': 'form', 'explode': True }})
    date_from: Optional[Any] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[Any] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    group: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    parameter: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parameter', 'style': 'form', 'explode': True }})
    parameter_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parameter_id', 'style': 'form', 'explode': True }})
    project: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    project_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'project_id', 'style': 'form', 'explode': True }})
    sort: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    unit: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AveragesV2GetV2AveragesGetRequest:
    query_params: AveragesV2GetV2AveragesGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AveragesV2GetV2AveragesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    open_aq_result: Optional[shared_openaqresult.OpenAqResult] = dataclasses.field(default=None)
    
