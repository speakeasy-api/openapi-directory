import dataclasses
from typing import Any,Optional
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import openaqprojectsresult as shared_openaqprojectsresult


@dataclasses.dataclass
class ProjectsGetV2ProjectsProjectIDGetPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectsGetV2ProjectsProjectIDGetQueryParams:
    country: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    country_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country_id', 'style': 'form', 'explode': True }})
    entity: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'entity', 'style': 'form', 'explode': True }})
    is_analysis: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isAnalysis', 'style': 'form', 'explode': True }})
    is_mobile: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isMobile', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    parameter: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parameter', 'style': 'form', 'explode': True }})
    parameter_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parameter_id', 'style': 'form', 'explode': True }})
    project: Optional[list[Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    sensor_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sensorType', 'style': 'form', 'explode': True }})
    sort: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source_name: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceName', 'style': 'form', 'explode': True }})
    unit: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ProjectsGetV2ProjectsProjectIDGetRequest:
    path_params: ProjectsGetV2ProjectsProjectIDGetPathParams = dataclasses.field()
    query_params: ProjectsGetV2ProjectsProjectIDGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsGetV2ProjectsProjectIDGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    open_aq_projects_result: Optional[shared_openaqprojectsresult.OpenAqProjectsResult] = dataclasses.field(default=None)
    
