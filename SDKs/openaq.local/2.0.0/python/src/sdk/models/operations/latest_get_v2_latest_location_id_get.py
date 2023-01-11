import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import entitytypes_enum as shared_entitytypes_enum
from ..shared import sensortypes_enum as shared_sensortypes_enum
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import openaqresult as shared_openaqresult


@dataclasses.dataclass
class LatestGetV2LatestLocationIDGetPathParams:
    location_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LatestGetV2LatestLocationIDGetQueryParams:
    city: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    coordinates: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'coordinates', 'style': 'form', 'explode': True }})
    country: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    country_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country_id', 'style': 'form', 'explode': True }})
    dump_raw: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dumpRaw', 'style': 'form', 'explode': True }})
    entity: Optional[shared_entitytypes_enum.EntityTypesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entity', 'style': 'form', 'explode': True }})
    has_geo: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'has_geo', 'style': 'form', 'explode': True }})
    is_analysis: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isAnalysis', 'style': 'form', 'explode': True }})
    is_mobile: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isMobile', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    manufacturer_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'manufacturerName', 'style': 'form', 'explode': True }})
    model_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modelName', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    parameter: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parameter', 'style': 'form', 'explode': True }})
    parameter_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parameter_id', 'style': 'form', 'explode': True }})
    radius: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    sensor_type: Optional[shared_sensortypes_enum.SensorTypesEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sensorType', 'style': 'form', 'explode': True }})
    sort: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceName', 'style': 'form', 'explode': True }})
    unit: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LatestGetV2LatestLocationIDGetRequest:
    path_params: LatestGetV2LatestLocationIDGetPathParams = dataclasses.field()
    query_params: LatestGetV2LatestLocationIDGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LatestGetV2LatestLocationIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    open_aq_result: Optional[shared_openaqresult.OpenAqResult] = dataclasses.field(default=None)
    
